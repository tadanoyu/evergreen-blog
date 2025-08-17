---
title: "Homebrew"
---

# Homebrew
#evergreen #pnoun/tools

[Homebrew](https://formulae.brew.sh/) is a package manager for macOS. You can use it to easily install either GUI or CLI applications.

Install using the following command:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Update everything in Homebrew to recent version:
```bash
brew update
brew upgrade # if you have any outdated packages
```

You can install GUI applications using `--cask` and CLI applications without: [[GUI and CLI applications I install when first setting up macOS]].
```sh
$ brew install --cask kitty bitwarden spotify
$ brew install bat fish
```

