---
title: Git Stash
sidebar_position: 20
---

When you work with *git* every day there are a lot of situations where you start working on something and in the middle of the process
you have to stop working on your current task and move to a different branch to check something else,
fix some urgent bug or to help your colleague or do something completely different from your task.
In these situations **git stash** is a great feature that *git* offers.

With **git stash** command you can temporarily store all changes that you've made in your *Working Directory* and in your index and safely
move to work on a different task. Be aware that by running **git stash** *git* will not store new files that you add to your *Working Directory*
and files that are ignored by *git*, to store new files you have to use `-u` or `--include-untracked` option.

**git stash** becomes more interesting if you dig a bit deeper and if you ask your self what is **git stash** in a more technical view.
It's the reference that points to the **git merge** commit. You can check this out with **git show-ref** command which lists all references
in your local repository.

```shell
➜  git-basics-for-beginners git:(master) git show-ref | grep stash
03848026bd57579369a7c22777f9e79a0f307ed7 refs/stash
```

and if you then run **git cat-file -t** this command will show type information on particular **git object**.

```shell
➜  git-basics-for-beginners git:(master) git cat-file -t 03848026bd57579369a7c22777f9e79a0f307ed7
commit
```

you can see that it is a commit. Now to see that it is a merge commit you can run:

`git show stash@{0}`

```shell
➜  git-basics-for-beginners git:(master) git --no-pager show stash@{0}
commit 03848026bd57579369a7c22777f9e79a0f307ed7 (refs/stash)
Merge: 45c5d9e e61a73a
Author: Nemanja <nemanjavasa@gmail.com>
Date:   Mon Jun 22 21:05:05 2020 +0200

    On master: WIP Working on Git Stash section

diff --cc README.md
index 5f0b860,5f0b860..af03466
--- a/README.md
+++ b/README.md
@@@ -460,20 -460,20 +460,60 @@@ To test, set employment date to less th
```

If you're asking you self why *git* is creating **merge commit** when stashing, answer is rather simple.
If you remember from the beginning of this section **git stash** can store changes that are in the *Staging Area* and changes that are 
unstaged as well, and since it is possible that your *Staging Area* and your *Working Directory* contain the same file that has been changed,
*git* needs a way to store these changes separately so it can apply them later when you use **git stash pop** OR **git stash apply**.

Some useful commands related to **git stash**:

`$ git stash list` - shows a list of all existing stashes

`$ git stash` - it will stash the changes in the memory

`$ git stash -u` - to stash untracked as well as tracked files

`$ git stash show` - to show the diff of stash

`$ git stash save <stash-message>` - stash changes with message

`$ git stash pop` - will take stashed change and also remove it from stash

`$ git stash apply` - will take stashed change but also keep it in the stash

`$ git stash drop stash@{<stash-number>}` - command for deleting particular stash

`$ git stash clean` - remove all stashed changes