---
title: Fast Forward
sidebar_position: 2
---

import ImageSwitcher from '../../src/ImageSwitcher.js';

With **Fast Forward merge** *git* history is a straight line without the need for a new merge commit.
This strategy is the default one (but only when possible). **Fast Forward** strategy occurs in the case when you create a new branch e.g. *feature*
from master branch and you make a few commits on *feature* branch, and by the time you are ready to merge those commits into *master* there is no
any new commits on *master* branch and all that *git* has to do is to move the *HEAD* pointer forward to the target branch.
Let's see this on the image bellow.

<ImageSwitcher lightImageSrc="/img/ff-merge.png" darkImageSrc="/img/ff-merge-dark.png"/>

Let's see what is happening in **git log** using this cool script *git-log.sh* (You can find script [here](https://github.com/GoodbyePlanet/git-basics-for-beginners/blob/master/git-log.sh))

![git](/img/git-ff.gif)
Thanks `Max Maintz` for providing this cool script.
