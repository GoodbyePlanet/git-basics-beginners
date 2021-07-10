---
title: Cleaning untracked files
sidebar_position: 12
---

`$ git clean [-f] [-d]`

If you have a bunch a files that you've created while implementing a new feature or while fixing some nasty bug,
but you don't want them in your next commit and you don't want them in your *Working directory* anymore `git clean` is the command that
lets you delete all untracked files from your *Working directory*.

`$ git clean -f` - **-f** **--force** (Force is required unless in the git configuration variable clean.requireForce option is set to false).

`$ git clean -d` - **-d** is to include directories.
