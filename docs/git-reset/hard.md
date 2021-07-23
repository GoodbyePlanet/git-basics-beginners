---
title: --hard
sidebar_position: 4
---

This option is considered to be dangerous because it modifies your *Working Directory*, and basically
resets everything to match the commit on which you reset to.
So any changes that you've had in the *Staging Area* and in the *Working Directory* will be lost
(you can still recover from this state and we will talk about that in the **git reflog** section).
Let's see an example.

```shell {2}
➜  git-basics-for-beginners git:(master)
 touch git-hard-example && git add . && git commit -m "Add git-hard-example file"
[master e103b63] Add git-hard-example file
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 git-hard-example
```

```shell
➜  git-basics-beginners git:(master) git --no-pager log --oneline
e103b63 (HEAD -> master) Add git-hard-example file
acb1c52 Add git reset --soft explanation
6953063 Add git reset --mixed explanation
```

```shell
➜  git-basics-beginners git:(master) git reset --hard acb1c52
HEAD is now at acb1c52 Add git reset --soft explanation
```

```shell
➜  git-basics-beginners git:(master) git status
On branch master
Your branch is ahead of 'origin/master' by 3 commits.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
```

```shell
➜  git-basics-beginners git:(master) git --no-pager log --oneline
acb1c52 (HEAD -> master) Add git reset --soft explanation
6953063 Add git reset --mixed explanation
```

As in the previous examples we added a new file and committed it. After we did **git reset --hard** 
our *HEAD* is now at **acb1c52** and **git status** shows that there is nothing to commit.
There is also one interesting notation that you can use
`$ git reset --soft HEAD^` => here `HEAD^` represents commit's first parent you can also use `HEAD~1`
which represents commit's first parent as well. `HEAD^2` or `HEAD~2` would represent commit's
second parent and so on.