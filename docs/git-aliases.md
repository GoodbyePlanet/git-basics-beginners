---
title: Git Aliases
sidebar_position: 26
---

When you work with *git* every day sometimes typing all these commands can be tedious, *git* aliases are
here to make you more efficient. It is very simple to configure them and to use them,
here is how you can configure your *git* aliases.

`git config --global alias.<alias-name> <git-command>`

*git* aliases that are really useful:

`git config --global alias.st status`

`git config --global alias.sts 'status --short --branch'`

`git config --global alias.unstage 'reset HEAD --'`

`git config --global alias.undo 'reset HEAD~1 --mixed'`

`git config --global alias.co checkout`

`git config --global alias.cob 'checkout -b'`

`git config --global alias.br branch`

To print last 10 commits from your project history without opening *git pager*,
you can also pass number of commit you want to be printed. e.g. `$ git npl 5`.

`git configl --global alias.npl '!f() { DEFAULT_N=${1-10};  git --no-pager log --oneline --decorate --graph -${1-$DEFAULT_N};  }; f'`

To delete alias use this command:

`git config --global --unset alias.<alias-name>`

One more useful thing to know if you want to add *git* alias that chains multiple *git* commands
using bash operators. For example, we want to add an alias for adding all files that have been changed
and files that are untracked by *git* as well, to the *Staging Area* and to commit them with inline
commit message.

`git config --global alias.aaac 'git add -A && git commit -m'`

If you add an alias like this it will fail when you try to execute it, you will get an error similar to one shown bellow.

`expansion of alias 'aaac' failed; 'git' is not a git command`

So to make it work we have to add `!` exclamation mark, it will allow us to use any command and not just *git* commands,
so right way to define alias would be:

`git config --global alias.aaac '!git add -A && git commit -m'`

