---
title: Git Reflog
sidebar_position: 25
---

Reflog of reference logs is just the history of all changes that you've made before, so every update that
you made on your branch tip (if you add new commits, reset commit, revert commit, change branches, pulling new changes)
*git* is storing inside `.git/logs/refs/heads`. (Git keeps reflogs 90 days by default after that old reflogs are garbage collected by *git*)

Let's see some example. Git reflog can help us to undo to the previous state if we mistakenly deleted the last commit.

```shell
➜  git-basics-beginners git:(master) touch reflog-example && git add . && git commit -m "Add reflog-example file"
[master 4fca500] Add reflog-example file
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 reflog-example
```

```shell
➜  git-basics-beginners git:(master) echo "This is the first line inside reflog-example" > reflog-example
➜  git-basics-beginners git:(master) ✗ git add reflog-example && git commit -m "Add first line to reflog-example"
[master 96fd57e] Add first line to reflog-example
 1 file changed, 1 insertion(+)
```

```shell
➜  git-basics-beginners git:(master) git --no-pager reflog
96fd57e (HEAD -> master) HEAD@{0}: commit: Add first line to reflog-example
4fca500 HEAD@{1}: commit: Add reflog-example file
4135a0b HEAD@{2}: commit: Improve git reflog section
9fcd7d6 (origin/master) HEAD@{3}: commit (amend): Improve Git Revert section
b6c828d HEAD@{4}: commit (amend): Improve Git Revert section
```

We've added two new commits, one new file and some content inside of it. Now, when we run **git reflog**
command it will show us that *git* stored those changes see *4fca500* and *96fd57e* commits.

Now suppose that we mistakenly reset the last commit, **git reflog** will show as that action too,
you see how it is stating `reset: moving to HEAD^` from which we can conclude that we deleted our last commit.
Also notice here how *git* is also keeping the commit that we've deleted `HEAD@{1}: commit: Add first-line to reflog-example`,
this is what will allow us to recover our deleted commit. Let's see an example of that.

```shell
➜  git-basics-beginners git:(master) git reset --hard HEAD^
HEAD is now at 4fca500 Add reflog-example file
```

```shell
➜  git-basics-beginners git:(master) git --no-pager reflog
4fca500 (HEAD -> master) HEAD@{0}: reset: moving to HEAD^
96fd57e HEAD@{1}: commit: Add first line to reflog-example
4fca500 (HEAD -> master) HEAD@{2}: commit: Add reflog-example file
4135a0b HEAD@{3}: commit: Improve git reflog section
9fcd7d6 (origin/master) HEAD@{4}: commit (amend): Improve Git Revert section
```

```shell
➜  git-basics-beginners git:(master) git reset --hard HEAD@{1}
HEAD is now at 96fd57e Add first line to reflog-example
```

Using **git reset** we can recover our deleted commit, I've used `HEAD@{1}` notation to reference which
commit I want to recover, and just like that our commit is back and we again have our first line
inside reflog-example file.

```shell
➜  git-basics-beginners git:(master) git --no-pager reflog -5
96fd57e (HEAD -> master) HEAD@{0}: reset: moving to HEAD@{1}
4fca500 HEAD@{1}: reset: moving to HEAD^
96fd57e (HEAD -> master) HEAD@{2}: commit: Add first line to reflog-example
4fca500 HEAD@{3}: commit: Add reflog-example file
4135a0b HEAD@{4}: commit: Improve git reflog section
➜  git-basics-beginners git:(master)
```

If you do again **git --no-pager reflog** you can see that last action where we used **git reset --hard HEAD@{1}**
to get back our commit is also stored by *git*.

Useful commands and options that relate to **git reflog**:

`$ git reflog` - this command is a short cut for git reflog show HEAD

`$ git reflog show <branch-name>` - command to see reflog for specific branch

`$ git log -g master` - if you want to see reflog in git log format

`$ git rflog delete <reflog-entry>` e.g. `master@{3}` command for deleting entry form git reflog






