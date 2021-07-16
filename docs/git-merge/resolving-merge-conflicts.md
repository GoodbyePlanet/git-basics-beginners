---
title: Resolving Merge Conflicts
sidebar_position: 4
---

Merge conflicts can be really annoying and scary thing especially if you are a beginner and you don't know how to deal with them.
So in this section, I will explain why you should not be afraid of merge conflicts and how to deal with them.
The first thing that you should know is that you can always go back to the previous state before you started with merging,
and have a clean state to start over.

Let's first to understand why merge conflicts occur. We know from the [Git Merge section](merge.md) that merging in *git* is integrating changes
from one branch to another. In most cases *git* will figure out how to integrate those changes without you, but sometimes it will need your help.
This will happen when in both branches changes are made to the same files and same lines of code have changed in these files,
or if you deleted file but that same file is modified in the branch that you are trying to integrate into your current *Working Directory*,
in this case, *git* will mark those files as files that have conflicts and it will ask you to decide what changes should be accepted before
it lets you continue with merging. Let's see an example.

```shell
➜  git-basics git:(master) git merge conflict-example
Auto-merging merge-conflict.txt
CONFLICT (content): Merge conflict in merge-conflict.txt
Automatic merge failed; fix conflicts and then commit the result.

➜  git-basics git:(master) ✗ git status
On branch master
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)

  both modified:   merge-conflict.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

So when conflict happens *git* will stop merging process and it will tell you in which files you have conflicts.
Also if you do **git status** it will give you a bit more information like fix conflicts and run _git commit_ or if you are not sure what you are
doing you can always run **git merge --abort** to get back to the state before the merge.
Also, it tells you that once you resolve conflicts you have to run **git add `<file>`** to mark that file as resolved.

```shell
➜  git-basics git:(master) ✗ cat merge-conflict.txt
<<<<<<< HEAD
Changing file from master branch
=======
This line is changed in conflict-example branch
>>>>>>> conflict-example
```

When you inspect file that has merge conflicts you can see that *git* added some markup to help you resolve conflicts.
It enclosed part of the file with conflict with `<<<<<<< HEAD ======= >>>>>>>` conflict-example.
The part between **HEAD** and `=======` is content from the destination branch on which you're currently working on and the other
part is content from the source branch that you are merging into your current branch.
Now to resolve the conflicts you have to delete that markup and also accept changes that should be included in your next commit.
Once you do that next step is to add changes to your *Staging Area* and then you can commit changes by running **git commit** or you can also run 
**git merge --continue** and let *git* to open your default editor so you can type your commit message.

You see that resolving conflicts is not that hard and you don't have to be afraid of doing it, in a bigger project it is perfectly OK
to consult with your colleague that worked on other branch when resolving conflicts so you can be sure that you are accepting changes
that will not break anything.