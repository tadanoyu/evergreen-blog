---
title: "Create the SSH configuration file"
description: ''
pubDate: 'May 15 2024'
---

After creating a new SSH key ([[Generate a new SSH key]]), you can create a SSH configuration file to let every terminal sessions pick up this new SSH key.

First create the SSH configuration file.
```shell
touch ~/.ssh/config
```

Then add these lines in the file.

```shell
Host *
	AddKeysToAgent yes
	UseKeychain yes
	IdentityFile ~/.ssh/id_25519
```