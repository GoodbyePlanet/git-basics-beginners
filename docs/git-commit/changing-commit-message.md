---
title: Changing commit message
sidebar_position: 2
---

`$ git commit --amend`

There are situations where it happens that we commit some changes and then we realize that we've made a typo in the commit message or we realize that
we have to add one more line of code and for that change new commit is not actually needed.
This is where **amend** option comes handy and we can use it to modify the most recent commit.
So instead of creating completely new commit apart from existing one just to fix typo or add one line of code,
we can add new changes and then modify the previous commit.

To add changes to the previous commit with a new commit message:

`$ git commit --amend -m '<commit-message>'`

To commit changed files using the same commit message from the previous commit:

`git commit --amend --no-edit`

One important thing here to understand is that **amend** will now just modify previous commit it will also create a new **commit object** with different *SHA-1*.
