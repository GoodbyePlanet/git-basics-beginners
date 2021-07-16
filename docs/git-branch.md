---
title: Git Branch
sidebar_position: 13
---

import ImageSwitcher from '../src/ImageSwitcher.js';

Branches are *git* feature that will be part of your everyday life as a software developer. 
So what are they? Imagine *git* branches as a way of working on new features and fixing bugs separately from your main codebase which is usually
*master* branch on which you keep only production-ready code. So when you want to add a new feature to your project or you want to fix a bug
you create a new branch you name it properly and you are ready to do some work, simple as that.

<ImageSwitcher lightImageSrc="/img/branch.png" darkImageSrc="/img/branch-dark-removebg.png"/>

**git branch** is command for working with *git* branches. Below are some useful commands that you will use while working with *git*:

`$ git branch` - command for listing local branches

`$ git branch -r` - command to see only remote branches

`$ git branch -a` - command to see all branches local and remote ones

`$ git branch <branch-name>` - command for creating a new branch

`$ git branch -d <branch-name>` - command for deleting local branch

`$ git push origin --delete <branch-name>` - command for deleting remote branch

`$ git branch -m <old-branch-name> <new-branch-name>` - command to rename local branch

`$ git branch -v` - prints additionally SHA1 and subject line of the last commit for every branch