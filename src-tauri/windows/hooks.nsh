!macro NSIS_HOOK_PREINSTALL
  MessageBox MB_OK "PreInstall"
!macroend

!macro NSIS_HOOK_POSTINSTALL
  MessageBox MB_OK "PostInstall"
!macroend

!macro NSIS_HOOK_PREUNINSTALL
  MessageBox MB_OK "PreUnInstall"
!macroend

!macro NSIS_HOOK_POSTUNINSTALL
  MessageBox MB_OK "PostUninstall"
!macroend