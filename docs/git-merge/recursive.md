---
title: Recursive
sidebar_position: 3
---

import ImageSwitcher from '../../src/ImageSwitcher.js';

Recursive merge strategy occurs when there is no linear path between the branches.
This can happen if you've created a *feature* branch from the *master* branch, you've made some new commits and now you want to merge it into *master*.
But, the difference is that in the meantime, someone updated the *master* branch and created some new commits there.
Now, in order to merge the branches, *git* has to combine changes into a new commit.
See the image bellow.

<ImageSwitcher lightImageSrc="/img/recursive-merge.png" darkImageSrc="/img/recursive-merge-dark.png"/>

Have a look at how new commit is created when there is no linear path between the branches.

![git](/img/recursive.gif)