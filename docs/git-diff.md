---
title: Inspecting changes with git diff
sidebar_position: 10
---

Main purpose of _git_ is to provide you a way to work with different versions of files, and when we work with different files sometimes we need a way to
see the difference between them. `git diff` is a command that allows us to compare different versions of files, you can use this command to compare different branches,
commits, files. Let's see some examples.

If you execute only `git diff` without any options, _git_ will show you all changes that you've made locally in your working directory and that are unstaged.
If you want to see staged changes then you have to add `--staged` option.

```shell
➜  git-basics-beginners git:(master) ✗ git status
On branch master
Your branch is up to date with 'origin/master'.

You are currently rebasing.
  (all conflicts fixed: run "git rebase --continue")

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  modified:   README_book.md

no changes added to commit (use "git add" and/or "git commit -a")

➜  git-basics-beginners git:(master) ✗ git diff

diff --git a/README_book.md b/README_book.md
index 0e23653..891d12c 100644
--- a/README_book.md
+++ b/README_book.md
@@ -24,6 +24,8 @@
     - [Changing commit message](#changing-commit-message)
     - [Rules of the good commit message](#rules-of-the-good-commit-message)

+  - [**- Inspecting changes with Git Diff -**](#inspecting-changes-with-git-diff)
+
   - [**- Ignoring files in _git_ -**](#ignoring-files-in--git-)

   - [**- Cleaning untracked files -**](#cleaning-untracked-files)
@@ -513,6 +515,14 @@ index 0b19467..55e0d78 100644


+Inspecting changes with Git Diff
+
+Main purpose of _git_ is to provide you a way to work with different versions of files,
 and when we work with different files sometimes we need a way to see the difference
 between them. `git diff`is a command that allows as to compare different versions of files,
 you can use this command to compare different branches, commits, files. Let's see some examples.
+
```

When you want to see changes between two different commits:

`$ git diff c870d10..71d278e`

To compare two branches you have to specify names of branches separated with two dots;

`$ git diff master..add-log-live-script`