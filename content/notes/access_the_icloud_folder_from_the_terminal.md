---
title: "Access the iCloud folder from the terminal"
---

# Access the iCloud folder from the terminal
#evergreen

```sh
cd ~/Library/Mobile\ Documentsn/com~apple~CloudDocs
```

You may encounter `Permission Denied` error. This can be solved by giving a `Full Disk Access` to the terminal from the setting.

Set up a symlink to have an easy access to your iCloud.

```sh
ln -s  ~/Library/Mobile\ Documentsn/com~apple~CloudDocs iCloud

cd iCloud
```