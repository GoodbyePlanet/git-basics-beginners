---
title: Cloning an existing repository
sidebar_position: 6
---

```shell
$ git clone <url-of-remote-repo>
```

**clone** is a command for downloading an existing *git* repository to our local machine. Example:

```shell
$ git clone https://github.com/GoodbyePlanet/git-basics-beginners.git
```

This will create a new directory **git-basics**, inside that directory, it will create **.git** a subdirectory, and then it will download all
the data related to that repository, after that, you can move to the newly created directory and start making changes and do awesome work on the project.
When you clone remote repository *git* will also configure default remote name called **origin** for the server from which you've cloned repository.
You can check this using the following command:

```shell
➜  git-basics-beginners git:(master) git remote
origin
```

You can also specify **-v** or **--verbose** in the command to be a bit verbose and to show remote URL:

```shell
➜  git-basics-beginners git:(master) git remote -v
origin  https://github.com/GoodbyePlanet/git-basics-beginners.git (fetch)
origin  https://github.com/GoodbyePlanet/git-basics-beginners.git (push)
```

If you change the name of your remote repository then you will also have to change URL of remote repository configured for your local *git* configuration of the project.
So to change existing remote repository URL you can use this command **git remote set-url**:

```shell
➜  git-basics-beginners git:(master) ✗ git remote set-url origin https://github.com/GoodbyePlanet/git-beginners.git
➜  git-basics-beginners git:(master) ✗ git remote -v
origin  https://github.com/GoodbyePlanet/git-beginners.git (fetch)
origin  https://github.com/GoodbyePlanet/git-beginners.git (push)
```

If you want to add a new *git* remote repository you can use this command **git remote add**:

```shell
➜  git-basics-beginners git:(master) ✗ git remote add basics https://github.com/GoodbyePlanet/git-basics.git
➜  git-basics-beginners git:(master) ✗ git remote -v
basics  https://github.com/GoodbyePlanet/git-basics.git (fetch)
basics  https://github.com/GoodbyePlanet/git-basics.git (push)
origin  https://github.com/GoodbyePlanet/git-basics-beginners.git (fetch)
origin  https://github.com/GoodbyePlanet/git-basics-beginners.git (push)
```

And to remove remote you can use this command **git remote remove**:

```shell
➜  git-basics-beginners git:(master) ✗ git remote remove basics
➜  git-basics-beginners git:(master) ✗ git remote -v
origin  https://github.com/GoodbyePlanet/git-basics-beginners.git (fetch)
origin  https://github.com/GoodbyePlanet/git-basics-beginners.git (push)
```