---
title: --mixed
sidebar_position: 2
---

**--mixed** option is default one so when you do `git reset <commit-sha>` it is same as you do `git reset --mixed <commit-sha>`,
and what this command does is: it will reset state of your *Staging Area* to the state of the specified commit,
but it will not reset your *Working Directory*. Let's see this using examples so that you can have a better
understanding of **--mixed** option.

Suppose we add a new file to the *Staging Area* and we make a new commit.

```shell {2}
➜  git-basics-beginners git:(master) ✗
 touch git-mixed-example && git add git-mixed-example && git commit -m "Add git-mixed-example file"
[master 8dca7b2] Add git-mixed-example file
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 git-mixed-example
```

we can see that we have a new commit:

```shell
➜  git-basics-beginners git:(master) ✗ git --no-pager log --oneline
8dca7b2 (HEAD -> master) Add git-mixed-example file
7aa9dca Update index.js file
1a90861 (origin/master) Improve Git Log section
```

now, let's do **git reset** to the previous commit the one with **7aa9dca** SHA-1 where we were before adding
git-mixed-example file.

```shell
➜  git-basics-beginners git:(master) git reset --mixed 7aa9dca
➜  git-basics-beginners git:(master) ✗ git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

Untracked files:
  (use "git add <file>..." to include in what will be committed)

  git-mixed-example

nothing added to commit but untracked files present (use "git add" to track)
```

By running **git status** we can see that we don't have our new file in the *Staging Area* and our *Working Directory* 
contains git-mixed-example file. And if you do **git log** you can notice that there is no more **8dca7b2**
commit our, *HEAD* and branch refs are now pointing to **7aa9dca** commit, exact same commit on which
we were before committing git-mixed-example file.

```shell
➜  git-basics-beginners git:(master) ✗ git --no-pager log --oneline
7aa9dca (HEAD -> master) Update index.js file
```

