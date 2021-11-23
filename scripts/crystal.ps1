$installationPath = vswhere.exe -version "[15.0,)" -requires Microsoft.VisualStudio.Component.VC.Tools.x86.x64 Microsoft.VisualStudio.Component.VC.ATL -requiresAny -property installationPath
if ($installationPath -and (test-path "$installationPath\Common7\Tools\vsdevcmd.bat")) {
  
  if(!$env:READY_FOR_CRYSTAL) {
    & "${env:COMSPEC}" /s /c "`"$installationPath\Common7\Tools\vsdevcmd.bat`" -no_logo -arch=amd64 && set" | foreach-object {
      $name, $value = $_ -split '=', 2
      set-content env:\"$name" $value
    }
    $env:READY_FOR_CRYSTAL = $true
  } 

  & _crystal.exe $args
}
else {
    "Can't find the Visual Studio Build Tools, please verify your installation."
}