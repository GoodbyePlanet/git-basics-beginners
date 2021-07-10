---
title: Initializing git repository
sidebar_position: 5
---

Command for initializing a new empty *git* repository is:

$ git init

This command will create a new subdirectory **.git** inside the current directory that you've created for your project.
This subdirectory is important for the *git* and it is where *git* stores all important objects and all its references.
You can list all the directories and files inside **.git** directory using **ls -la** command and see what is in there,
later on in the book meaning of some of the files that are present in **.git** directory will be explained.

```shell
➜  git-basics git init
Initialized empty Git repository in /Users/nemanjavasic/Documents/git-basics/.git/
```

```shell
➜  git-basics git:(master) ls -la .git
total 24
drwxr-xr-x   9 nemanjavasic  staff  288 Jun 14 13:40 .
drwxr-xr-x   3 nemanjavasic  staff   96 Jun 14 13:40 ..
-rw-r--r--   1 nemanjavasic  staff   23 Jun 14 13:40 HEAD
-rw-r--r--   1 nemanjavasic  staff  137 Jun 14 13:40 config
-rw-r--r--   1 nemanjavasic  staff   73 Jun 14 13:40 description
drwxr-xr-x  13 nemanjavasic  staff  416 Jun 14 13:40 hooks
drwxr-xr-x   3 nemanjavasic  staff   96 Jun 14 13:40 info
drwxr-xr-x   4 nemanjavasic  staff  128 Jun 14 13:40 objects
drwxr-xr-x   4 nemanjavasic  staff  128 Jun 14 13:40 refs
```
