---
title: --soft
sidebar_position: 3
---

When you execute **git reset** with **--soft** option your *Working Directory* will not be affected,
the only thing that will be different is that **git status** will show that changes that you've
previously committed are now in the state *Changes to be committed*. Let's see an example.
We will take the same approach as in [Mixed](mixed.md) section, we will create a new file,
commit it and then do the **--soft reset**.

```shell {2}
➜  git-basics-beginners git:(master)
 touch git-soft-example && git add git-soft-example && git commit -m "Add git-soft-example file"
[master 8426e59] Add git-soft-example file
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 git-soft-example
```

```shell
➜  git-basics-beginners git:(master) git --no-pager log --oneline
8426e59 (HEAD -> master) Add git-soft-example file
6953063 Add git reset --mixed explanation
7aa9dca Update index.js file
```

```shell
➜  git-basics-beginners git:(master) git reset --soft 6953063
➜  git-basics-beginners git:(master) ✗ git status
On branch master
Your branch is ahead of 'origin/master' by 2 commits.
  (use "git push" to publish your local commits)

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

  new file:   git-soft-example
```

So after committing git-soft-example file we executed **git reset** with **--soft** option.
After that is done **git status** showed us that git-soft-example file is now in the *Staging Area*
and it is ready to be committed.


