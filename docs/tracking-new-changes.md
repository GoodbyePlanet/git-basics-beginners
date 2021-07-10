---
title: Tracking new changes
sidebar_position: 7
---

**git add** is the command for adding new and changed files from the *Working Directory* to the *Staging Area*.
One important thing here to understand is that **git add** will not record any changes to your repository until you do **git commit**. We can use:

`$ git add .`

to add all changed and new files, or we can use:

`$ git add <path-to-file>`

to add a specific file to the *Staging Area* or you could also use regex to e.g. add all JavaScript files:

`$ git add *.js`

Ok, let's see some examples, you remember how I promised that I will show you neat trick in the command line that you can use to see what is happening behind the scene.
First open two command line windows and go to your project root directory in both terminals, then execute this script in one of them:

```shell
$ while; do; clear; tree .git; sleep 1; done;
```

This is simple shell loop that will clear the screen, run `tree .git` command, wait for one second and repeat the process.
Now assuming that you have newly initialized *git* repository you will see that *git* repository tree is being displayed and cleared every second.
Now if you, for example, add README.md file:

`$ git add README.md`

you will see that new file called **index** was created, so what you've seen there is README.md file being added to the *Staging Area* and that is where *git* is keeping information 
on all staged files.
Next if you go further and commit that change you will see that a new directory has been created inside objects directory and also a new file with some hash as it's name
has been created. That file is the *git* **commit object** and its hash name is unique *SHA-1* that contains metadata on the commit that you've created.
You can examine the content of the git object by using `git cat-file -p <commit-hash>` command.

![git](/img/git-add.gif)
![git](/img/git-cat-file.gif)