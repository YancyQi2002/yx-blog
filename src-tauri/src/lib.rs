#[allow(unused_imports)]
use tauri::{App, Manager};
use tauri_plugin_log::{LogTarget};
#[allow(unused_imports)]
use window_shadows::set_shadow;
#[allow(unused_imports)]
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
      .plugin(tauri_plugin_log::Builder::default().targets([
        LogTarget::LogDir,
        LogTarget::Stdout,
        LogTarget::Webview,
      ]).build())
      .setup(move |app| {
        log::info!("setup app");

        if let Some(setup) = setup {
          (setup)(app)?;
        }

        let window = app.get_window("main").unwrap(); // 获取名为"main"的窗口

        #[cfg(target_os = "macos")]
        apply_vibrancy(&window, NSVisualEffectMaterial::HudWindow, None, None) // 在macOS上应用vibrancy效果
          .expect("Unsupported platform! 'apply_vibrancy' is only supported on macOS");

        #[cfg(target_os = "windows")]
        apply_blur(&window, Some((18, 18, 18, 125))) // 在Windows上应用模糊效果
          .expect("Unsupported platform! 'apply_blur' is only supported on Windows");

        #[cfg(any(windows, target_os = "macos"))]
        set_shadow(&window, true).unwrap(); // 在Windows和macOS上设置窗口阴影

        Ok(())
      })
      .run(tauri::generate_context!())
      .expect("error while running tauri application");
  }
}