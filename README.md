# Crystal for Windows Preview
This repo provides a way to try the Crystal programming language on Windows.

## Getting Started

### Instructions

1. Install the [Scoop package manager](https://scoop.sh/)
2. If you don't already have it, install git with `scoop install git`
3. Then run the following commands: 
```
    scoop bucket add crystal-preview https://github.com/neatorobito/scoop-crystal
    scoop update
    scoop install crystal
```


Voila!

### Notes
**Crystal on Windows requires the Visual Studio C++ Build Tools. This is a small subset (~2GB) of the overall Visual Studio offerring.** Scoop will automatically install the latest version before installing Crystal. The Visual Studio Installer UI will open to display progress.


If you already have Visual Studio installed, this will not interfere with your current installation.
