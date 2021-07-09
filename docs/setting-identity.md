---
title: Setting Identity
---

After installing *git* you will have to configure it on your computer. The most important configuration variables are **username** and **email**. *Username* 
is configuration variable that *git* will use to associate you with every commit that you make locally and when you push those commits
to **GitHub** repository from the command line *Email* is configuration variable that *git* uses to associate all commits that you push to the remote repository with your **GitHub** account. 
*Git* also offers a way to set different email addresses for commits that you push from the command line and for commits and other operations that you make from **GitHub**. On the other hand,
if you don't want your email to be visible on every commit that you make you can use *no-reply* email address that *git* provides.

Follow below commands to setup your *git* username and email:

`$ git config --global user.name "Your name here"`

`$ git config --global user.email "Your email address here"`

**--global** - by using this option you are setting *username* and user *email* variables globally on your system (you are changing `~/.gitconfig file`),
which means that values for those variables will be used for all of the repositories on our system.

There is **--local** option as well, you can use it to set your configuration variables for the specific repository.

If you want to check your **git configurations** use the following command:

`$ git config --list`

If you're not completely new to *git* and you're already familiar with _git push_ the following configuration can be useful:

`$ git config --global push.default current`

With this configuration you will change the default behavior of `git push` and you will be able to push the current branch to the
remote one with using only `git push` command without specifying `origin <branch-name>`.

If you don't like `master` as a name of the default branch, new git version `2.28` comes with a new configuration variable to change the name of the default branch

`$ git config --global init.defaultBranch <default-branch-name>`

With this configuration you can set the default branch name for newly-created *git* repositories.