---
title: Git Pull
sidebar_position: 16
---

This is one of the commands that you will use all the time when collaborating with your team members on the project.
Like **git fetch** **git pull** is a command that is used to sync your local **.git directory (Repository)** with a remote one.
The difference between these two commands is that **git pull** will first fetch all changes from remote using **git fetch** and then it will use
**git merge** command to update your local repository with changes from remote, this is because by default *git* is configured to use
merge operation when pulling changes. When you're doing **git pull** sometimes it can happen that merge conflicts occur.
They usually occur when *git* tries to merge changes in the file that have been modified both locally and on the remote side as well,
in that case *git* doesn't know how to incorporate those changes and it will ask you to solve conflicts before it continues with merging.
More about conflict will be explained in [Resolving Merge Conflicts](git-merge/resolving-merge-conflicts.md) section of the book.

When pulling changes you should have in mind that **git pull** will fail if you have uncommitted changes thus, you have to always commit
your changes before you pull changes for the remote.
Command for fetching all changes from remote and merging them;

`$ git pull <remote>`

You can also specify remote branch name when pulling changes:

`$ git pull origin feature/add_footer_section`

Or you can just use **git pull** without any other options if your local branch has tracking connection with a remote one.
You can check if your local branch is tracked by using the following command:

`$ git remote show <name-of-remote>`

```shell
➜  git-basics-beginners git:(master) git remote show origin
* remote origin
  Fetch URL: https://github.com/GoodbyePlanet/git-basics.git
  Push  URL: https://github.com/GoodbyePlanet/git-basics.git
  HEAD branch: master
  Remote branches:
    feature/add_footer_section tracked
    bug/fix_main_layout        tracked
    master                     tracked
  Local branch configured for 'git pull':
    master merges with remote master
  Local ref configured for 'git push':
    master pushes to master (fast-forwardable)
```