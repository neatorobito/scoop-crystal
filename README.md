# Crystal for Windows Preview
This repo provides a way to try the Crystal programming language on Windows.

## Getting started

### Instructions

1. Install the [Scoop package manager](https://scoop.sh/)
2. If you don't already have it, install git with `scoop install git`
3. Then run the following commands: 
```
scoop bucket add crystal-preview https://github.com/neatorobito/scoop-crystal
scoop install crystal
```

Create a file called hello.cr with the editor of your choice:

`puts "Hello from Windows!"`

Restart your terminal and voila!

![image](https://user-images.githubusercontent.com/3013405/143065706-5da8ec8e-b6de-4f28-8a29-74569dc2ae89.png)


### Notes
**Crystal on Windows requires the Visual Studio C++ Build Tools. This is a small subset (~1.7GB) of the overall Visual Studio offerring.** Scoop will automatically install the latest version before installing Crystal. The Visual Studio Installer UI will open to display progress.


If another version of Visual Studio is already installed, this will not interfere with that installation.

## Working/Not Working
Crystal on Windows is still under active development. You may encounter bugs or missing functionality. For more information, see [#5430 Coordinate porting to Windows](https://github.com/crystal-lang/crystal/issues/5430#)
