---
title: Git Push
sidebar_position: 18
---

`git push` is a command for uploading local changes that we have made to the remote repository.
`$ git push origin <branch-name>` - is a command that we can use when we want to push the branch to the remote repository.
**origin** in this command is essentially shorthand for the remote repository URL.
You can see more information about your remote with the following command:

`$ git remote show origin`

```shell
➜  git-basics-for-beginners git:(master) ✗ git remote show origin
* remote origin
  Fetch URL: https://github.com/GoodbyePlanet/git-basics-for-beginners.git
  Push  URL: https://github.com/GoodbyePlanet/git-basics-for-beginners.git
  HEAD branch: master
  Remote branches:
    feature/hello-world tracked
    feature/test        tracked
    master              tracked
  Local branch configured for 'git pull':
    master merges with remote master
  Local ref configured for 'git push':
    master pushes to master (up to date)
```

So **origin** is just a name that **git clone** command implicitly gives when you're cloning repository, and you can use it as a reference
to your remote repository. So, to push your changes to the remote repository, you can use either the command:

`git push <remote-url> <branch-name>` or `git push <remote-short-name> <branch-name>`.

One of the options that you can use with push command is `--force` but you always have to be careful with this option before you decide
to send changes to the remote. This is because normally when you do push command *git* will always perform some checks before it lets you update
remote repository, and basically *git* will check if there is an ancestor commit that is present on the remote but not on your local repository,
and if there is **git push** will fail. So when will this happen? Usually, it happens when someone pushed some changes on the remote and
you are trying to push your changes as well but you haven't updated your local repository before pushing.
With `--force` option you can avoid these checks but you have to be absolutely sure that what you are doing will not overwrite someone else's
commits on the remote repository.

Here is one example. Suppose you've just pushed your commit to remote, and you realized that there is a typo in you commit message and you want to fix it.
You can use `git commit --amend` command to commit changes when you fix that typo. Now if you try to push this change without using `--force` option
it will fail. You will be faced with something like this:

```shell
➜  git-practice git:(master) git push
To https://github.com/GodbyPlanet/git-practice.git
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'https://github.com/GodbyPlanet/git-practice.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

So here in this situation you can use `--force` option, but before you do you have to be certain that none of your colleagues have pulled commits before
you do push because otherwise, you will make inconsistent state between remote and local copies that your colleagues have.

`$ git push --force-with-lease` - If you are in a situation where you are thinking about using `--force` option, this command will allow you to push with
`--force` but it will first check if someone else did some changes on that branch, and if it is it will not allow you to overwrite someone else's commits.