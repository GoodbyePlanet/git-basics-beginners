---
title: Git Fetch
sidebar_position: 15
---

When you want to see what your colleagues have been working on and to examine their work, one of the commands that allow you to do
that is **git fetch**. This command will download all commits, files from the remote repository in our local repo, but the
important part here is that it will not update your local repository files leaving your current work intact.

Another command that lets you download changes from remote is **git pull** we will talk about this command in the next section,
but what you have to remember is that **git fetch** is a safe option, because as stated above once this command finishes its work it will leave you local
working directory intact. If you asking yourself how *git* accomplishes this we will have to dive a little bit deeper and see what
is happening behind the scene. Don't worry it is not complicated at all, it is all about how *git* stores commits. If you remember
from [Git commit section](git-commit/commit.md) *git* stores all commits inside **.git/objects** directory, but it keeps local and remote branch commits
separated using **branch refs** and by keeping those refs inside different directories. Local branch refs are kept inside
**.git/refs/heads** and remote branch refs inside **.git/refs/remotes** directories.

`$ git fetch <remote>` - command for downloading all data from `<remote>`, if not specified *git* it will consider **origin** as a default remote.

`$ git fetch <remote> <branch>` - command for downloading data from specific remote branch.

`$ git fetch --all` - command for downloading data from all remotes that you have configured for your project repository.