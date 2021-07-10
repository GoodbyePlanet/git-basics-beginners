---
title: Committing changes
sidebar_position: 1
---

`$ git commit`

We've already tackled `git commit`. This command creates a new commit object and it stores it inside `.git/objects` directory,
commit will have its unique `SHA-1` checksum that contains metadata on the commit that you've created.
When you execute `git commit` command it will lunch default editor on your OS, you can change this behavior by changing `git config --global core.editor` configuration variable.

```shell
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# On branch master
# Your branch is up to date with 'origin/master'.
#
# Changes to be committed:
#       modified:   README.md
#
```

As you can see there is some default message that _git_ displays to us explaining what we need to do next.

If you don't like this way of committing you can use `$ git commit -m` for adding commit message inline without opening the editor.

There is even shorter command:

`$ git commit -a -m OR git commit -am`

With this command you can add changed files to the *Staging Area* and write commit message:

`NOTE: `-a` argument will not add newly created files to the staging area it will add only already existing files from you Working Directory that have been changed,
for new files you will have to add them separately with `git add` command or using `git add -A` to add all new files`


One more useful command that you can use to see details of a particular commit object is `git show <commit-SHA>`.

```shell {1}
➜ git-basics-beginners git:(master) git show 6aed94d
commit 6aed94ddbb5a529a004b69958ae4e7fbdbd32a96
Author: Nemanja <nemanjavasa@gmail.com>
Date:   Tue Jun 16 21:51:20 2020 +0200

    Improve changing git commit message section

diff --git a/README.md b/README.md
index 0b19467..55e0d78 100644
--- a/README.md
+++ b/README.md
```