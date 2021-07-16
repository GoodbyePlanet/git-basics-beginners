---
title: Git Checkout
sidebar_position: 14
---

`git checkout`

This is a command that you can use with files, commit objects and branches. It is commonly used for switching between branches,
but you can use it also to discard changes in your *Working Directory*. When you use it to switch to different branch *git* will
update all files in your *Working Directory* to match the files that are present in that particular version of your application
stored in the branch you switching to. When you checkout to the specific commit object then you're in *detached HEAD* mode - this
is explained in [Git basic Three Trees](basic-three-trees-workflow.md) workflow section of the book. And when you use **git
checkout** to checkout file *git* will discard all unstaged changes in that file.

To checkout to a different branch:

`$ git checkout <branch-name>`

`$ git checkout -b <branch-name>`

-b is a convenient option that lets as to create a new branch and then checkout to that branch.

Here are a few tips that you can use and that can speed up your every day work with *git*.

Useful command to discard all changes made in all files:

`$ git checkout -- .`

Useful command for switching to last checked out branch:

`$ git checkout -`