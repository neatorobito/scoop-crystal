# Crystal for Windows Preview
This repo provides an official way to try the Crystal programming language on Windows.

### Requirements
1. [Scoop Package Manager](https://scoop.sh/)
2. Visual Studio or Visual Studio Build Tools with `Microsoft.VisualStudio.Workload.VCTools` and `Microsoft.VisualStudio.Component.VC.ATL` components. 
     * If you already have an existing Visual Studio installation (2017 or later), open the installer and simply select these components under Desktop Development. 
     * Otherwise, you can install a smaller subset of Visual Studio with only the tools you need from this bucket (more on that later).

### Instructions
Run the following in commands in terminal to install the latest crystal release.
1. `scoop install git`
2. `scoop bucket add crystal-preview https://github.com/neatorobito/scoop-crystal`

    * If you don't already have the correct Visual Studio components discussed earlier, run `scoop install vs_2022_cpp_build_tools`. The Visual Studio Installer UI will open to display progress.
    * If you see `ERROR Exit code was 3010!`, this simply means you'll need to reboot for VS to complete the installation. Run the same command again then reboot.

3. `scoop install crystal`

Next, create a file called `hello.cr` with the editor of your choice and the following contents:

`puts "Hello from Windows!"`

Run `crystal hello.cr` and voila!

![image](https://user-images.githubusercontent.com/3013405/143065706-5da8ec8e-b6de-4f28-8a29-74569dc2ae89.png)

The majority of the language is available and functional on Windows. For more information about platform support, see the [documentation.](https://crystal-lang.org/reference/1.18/syntax_and_semantics/platform_support.html)
