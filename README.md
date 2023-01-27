# Crystal for Windows Preview
This repo provides an official way to try the Crystal programming language on Windows.

## Getting started

### Requirements
1. Enable developer mode in Settings.
2. [Scoop package manager](https://scoop.sh/)
3. Visual Studio or Visual Studio Build Tools with `Microsoft.VisualStudio.Workload.VCTools` and `Microsoft.VisualStudio.Component.VC.ATL` components. 
     * If you already have an existing Visual Studio installation (2017 or later), open the installer and simply select these components under Desktop Development. 
     * Otherwise you can install a smaller subset of Visual Studio with only the tools you need from this bucket, see below.

### Instructions
1. `scoop install git`
2. `scoop bucket add crystal-preview https://github.com/neatorobito/scoop-crystal`

    * If you don't already have the correct Visual Studio components discussed earlier, run `scoop install vs_2022_cpp_build_tools`. The Visual Studio Installer UI will open to display progress. If you see `ERROR Exit code was 3010!`, this simply means you need to reboot. Run the same command again and reboot.

3. `scoop install crystal`

Create a file called hello.cr with the editor of your choice:

`puts "Hello from Windows!"`

Restart your terminal and voila!

![image](https://user-images.githubusercontent.com/3013405/143065706-5da8ec8e-b6de-4f28-8a29-74569dc2ae89.png)

## Working/Not Working
The majority of the language is available and functional on Windows with the exception of multi-threading and signals. 

Keep in mind, however, that Crystal for Windows is still under development and so you may encounter some issues. Please file bugs for any issues you encounter on the Crystal repo page. For more in-depth information and the current status of the Windows port, see [#5430 Coordinate porting to Windows](https://github.com/crystal-lang/crystal/issues/5430#)
