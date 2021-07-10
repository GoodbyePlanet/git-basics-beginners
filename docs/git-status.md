---
title: Git status
sidebar_position: 8
---

`$ git status`

This is a command that we use to see the status of our *Working Directory*. 
It will show us all differences between our *Working Directory* and *Index file* or *Staging Area*, and we will see what files are staged,
what are not and what files are not tracked by *git*.

If you haven't made any changes *git* will show you that your *Working Directory* is clean.

```shell
➜  git-basics-for-beginners git:(master) git status
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
```

If you have some changes than *git* will show you different status with some additional information.

```shell
➜  git-basics-for-beginners git:(master) ✗ git status
On branch master
Your branch is up to date with 'origin/master'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)
  modified:   README.md
no changes added to commit (use "git add" and/or "git commit -a")
```

If you've added a new file to your project than *git* will tell you that a new file is untracked and that you should add it to your *Staging Area* using **git add command**.

```shell
➜  git-basics-for-beginners git:(master) ✗ git status
On branch master
Your branch is up to date with 'origin/master'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)

  footer.js

nothing added to commit but untracked files present (use "git add" to track)
```

If you like more simplified and short output you can use **--short** option.

`git status --short OR shorter => git status -s` you can add also `--branch` option to show branch in short format.

`$ git status --short --branch`

```shell
➜  git-basics-for-beginners git:(master) ✗ git status --short --branch
## master...origin/master
 M README.md

 #### Based on your changes you will get a different format

`??` => New untracked files

`A` => new files that have been added to the staging area

`M` => modified files

`D` => deleted files

`R` => renamed files
```