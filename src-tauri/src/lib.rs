#![allow(dead_code, unused_imports, unused_variables, unused_mut)]
use tauri::{App, Manager};
use tauri_plugin_log::{LogTarget};
use tauri_plugin_cli::CliExt;
use tauri_plugin_clipboard::{ClipboardExt, ClipKind};
use tauri_plugin_dialog::DialogExt;
use tauri_plugin_global_shortcut::GlobalShortcutExt;
use window_shadows::set_shadow;
use window_vibrancy::{apply_blur, apply_vibrancy, NSVisualEffectMaterial};

#[cfg(mobile)]
mod mobile;
#[cfg(mobile)]
pub use mobile::*;

pub type SetupHook = Box<dyn FnOnce(&mut App) -> Result<(), Box<dyn std::error::Error>> + Send>;

#[derive(Default)]
pub struct AppBuilder {
  setup: Option<SetupHook>,
}

impl AppBuilder {
  pub fn new() -> Self {
    Self::default()
  }

  #[must_use]
  pub fn setup<F>(mut self, setup: F) -> Self
  where
    F: FnOnce(&mut App) -> Result<(), Box<dyn std::error::Error>> + Send + 'static,
  {
    self.setup.replace(Box::new(setup));
    self
  }

  pub fn run(self) {
    let setup = self.setup;
    tauri::Builder::default()
      .plugin(tauri_plugin_app::init())
      .plugin(tauri_plugin_cli::init())
      .plugin(tauri_plugin_clipboard::init())
      .plugin(tauri_plugin_dialog::init())
      .plugin(tauri_plugin_fs::init())
      .plugin(tauri_plugin_global_shortcut::init())
      .plugin(tauri_plugin_http::init())
      .plugin(tauri_plugin_notification::init())
      .plugin(tauri_plugin_os::init())
      .plugin(tauri_plugin_window::init())
      .plugin(tauri_plugin_log::Builder::default().targets([
        LogTarget::LogDir,
        LogTarget::Stdout,
        LogTarget::Webview,
      ]).build())
      .setup(move |app| {
        log::info!("setup app");

        let cli_matches = app.cli().matches()?;

        if let Some(setup) = setup {
          (setup)(app)?;
        }

        let window = match app.get_window("main") { // 获取名为"main"的窗口
          Some(window) => window,
          None => return Err(Box::new(std::io::Error::new(std::io::ErrorKind::Other, "未找到名为 'main' 的窗口"))),
        };

        #[cfg(target_os = "macos")]
        {
          apply_vibrancy(&window, NSVisualEffectMaterial::HudWindow, None, None) // 在macOS上应用vibrancy效果
          .expect("Unsupported platform! 'apply_vibrancy' is only supported on macOS");
        }
        

        #[cfg(target_os = "windows")]
        {
          apply_blur(&window, Some((18, 18, 18, 125))) // 在Windows上应用模糊效果
          .expect("Unsupported platform! 'apply_blur' is only supported on Windows");
        }
        

        #[cfg(any(windows, target_os = "macos"))]
        {
          set_shadow(&window, true).unwrap(); // 在Windows和macOS上设置窗口阴影
        }

        Ok(())
      })
      .run(tauri::generate_context!())
      .expect("error while running tauri application");
  }
}