---
title: "Configure tmux to start with a fish shell"
---

# Configure tmux to start with a fish shell
#evergreen

Set the option in tmux configuration file located at root (`~/.tmux.conf`) to start tmux with a [[fish shell]].

```sh
set-option -g default-shell /usr/local/bin/fish
```
