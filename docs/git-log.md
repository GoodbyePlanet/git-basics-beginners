---
title: Git Log
sidebar_position: 21
---

One of *git* commands that are really useful and that you will use all the time is **git log**.
It's sole purpose is to show your commit logs and it allows you to look into the history of everything that happened in your project repository.
So using this command you can dive deep into the history of your project, find who was working on what, what lines of code were changed,
find where bugs were introduced, etc. There are a lot of different parameters that you can pass to **git log**.
I will show a few of them that are really useful.

`$ git log` - outputs the most basic log

```shell
➜  git-basics-for-beginners git:(master) ✗ git log
commit 016a78afb73c9c124a01a675ab057b4be03c1be1 (HEAD -> master)
Author: Nemanja <nemanjavasa@gmail.com>
Date:   Mon Jun 22 21:33:13 2020 +0200

    Add git show command explanation

commit 11d60de7cda71af0ab4aced80c9a2160c08636a7
Author: Nemanja <nemanjavasa@gmail.com>
Date:   Mon Jun 22 21:24:10 2020 +0200

    Improve Git Stash section
```

`$ git log <branch-name>` - it will give you the same output as **git log** but it will be restricted to a specific branch

`$ git log --oneline` - it will output history formatted in one line

```shell
➜  git-basics-for-beginners git:(master) ✗ git log --oneline
016a78a (HEAD -> master) Add git show command explanation
11d60de Improve Git Stash section
45c5d9e (origin/master) Fix typo in guide header
3b91b59 Improve Git Pull Request section
2133cbd Improve Git Push section
```

`$ git log --author` - output of this command will be the same as from **git log** but commits will be only for a specific author

`$ git log -n` - output of this command will be the same as from **git log** only difference is that you can specify
how many commits you want to be displayed to you with `n` option

`$ git log -p` - `-p` is an option that you can specify to see the entire diff of changes for commits

```shell
➜  git-basics-beginners git:(master) ✗ git log -p
commit 016a78afb73c9c124a01a675ab057b4be03c1be1 (HEAD -> master)
Author: Nemanja <nemanjavasa@gmail.com>
Date:   Mon Jun 22 21:33:13 2020 +0200

    Add git show command explanation

diff --git a/README.md b/README.md
index a286344..b7083e0 100644
--- a/README.md
+++ b/README.md
@@ -228,6 +228,25 @@ �<9E><9C>  git-basics-for-beginners git:(master) �<9C><97> git status --short
 --branch
 >NOTE: `-a` argument will not add newly created files to the staging area it will add only alread
y existing files from you Working Directory that have been changed, for new files you will have to
 add them separately with `git add` command
 ---

+#### One more useful command that you can use to see details of a particular commit object is `git
 show <commit-SHA>`
```

`$ git log --oneline --decorate --graph` - this command will show your branch and merge history graphically represented

```shell
➜  git-basics-beginners git:(master) ✗ git log --oneline --decorate --graph
* 016a78a (HEAD -> master) Add git show command explanation
* 11d60de Improve Git Stash section
* 45c5d9e (origin/master) Fix typo in guide header
* 3b91b59 Improve Git Pull Request section
* 2133cbd Improve Git Push section
* 95318eb Delete squash section
* b892351 Fix typo in recursive merge section header
* 8dc6198 Change git merge images
* 45dc42e Add recursive gif
*   31bb5d9 Merge branch 'feature'
|\
| * 99ec1f0 (feature) Add subtitle for git log script
* | e7615fb Update Index page
|/
* 7ba34d1 Change title of git squash section
```