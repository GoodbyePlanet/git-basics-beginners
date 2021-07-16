---
title: Merging remote changes
sidebar_position: 1
---

Merging in *git* world means integrating work that has been done on one branch into another branch.
Integrating means combining all commits from source branch with commits from receiving branch.
**git merge** is a command that we can use for integrating changes that have been made on the remote or local branch into your current branch
by creating in most cases a new **merge commit**. What do I mean with in most cases.
In some cases when we do **git merge** *git* can realize that it can perform so-called **Fast Forward** merge strategy where no merge commit is needed,
in other cases *git** will have to create a new **merge commit** in order to integrate changes from two different branches.
We will talk about merge strategies in the next subsection.

**Note:** When you want to do merge always make sure that your destination branch (the branch on which you want changes from the source branch to be applied)
is updated with the latest changes from the remote branch. This is good practice and by doing this your destination branch will always be up to date
and clean before you merge some other branch into it and also it will prevent any conflicts when you pull changes from remote later on.

`$ git merge <branch-name>` - here branch-name is the name of the branch that will be merged into the current branch

`$ git merge --abort` - abort is an option that is useful when you are in the process of resolving conflicts, and if you want to get back
to the original state before you executed **git merge**, with abort option *git* will reconstruct the state of your *Working directory* 
that you had before executing **git merge** command.

`$ git merge --continue` - continue is another useful option that you can use to finish merge operation once you resolve all conflicts
that occurred during merge execution.

Let's talk now about merge strategies, there are several merge strategies, but two most common are
[**Fast Forward**](fast-forward.md) and [**Recursive Merge**](recursive.md).