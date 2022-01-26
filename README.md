# Crystal for Windows Preview
This repo provides a way to try the Crystal programming language on Windows.

## Getting started

### Requirements
1. Enable developer mode in Settings.
2. [Scoop package manager](https://scoop.sh/)
3. Visual Studio or Visual Studio Build Tools with `Microsoft.VisualStudio.Workload.VCTools` and `Microsoft.VisualStudio.Component.VC.ATL` components. 
     * If you already have an existing Visual Studio installation (2017 or later), open the installer and simply select these components under Desktop Development. 
     * Otherwise you can install a smaller subset of Visual Studio with only the tools you need from this bucket, see below.

### Instructions

1. `scoop bucket add crystal-preview https://github.com/neatorobito/scoop-crystal`

    * If you don't already have the correct Visual Studio components discussed earlier, run `scoop install vs_2022_cpp_build_tools`. The Visual Studio Installer UI will open to display progress.

2. `scoop install crystal`

Create a file called hello.cr with the editor of your choice:

`puts "Hello from Windows!"`

Restart your terminal and voila!

![image](https://user-images.githubusercontent.com/3013405/143065706-5da8ec8e-b6de-4f28-8a29-74569dc2ae89.png)

## Working/Not Working
Crystal on Windows is still under active development. You may encounter bugs or missing functionality. For more information, see [#5430 Coordinate porting to Windows](https://github.com/crystal-lang/crystal/issues/5430#)
