$buildToolsPath = vswhere.exe -latest -products 'Microsoft.VisualStudio.Product.BuildTools' -property installationPath
$fullInstallPath = vswhere.exe -version '[15.0,)' -property installationPath
$installationPath = ""

if($buildToolsPath) {
  $compilersPath = $buildToolsPath
}
else if($fullInstallPath){
  $compilersPath = $fullInstallPath
}
else
{
  "Can't find a full Visual Studio installation or a Visaul Studio Build Tools installation."
}

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
    "Can't find MSVC to load a dev environment, please verify the following workloads and components are installed: Microsoft.VisualStudio.Workload.VCTools and Microsoft.VisualStudio.Component.VC.ATL"
}