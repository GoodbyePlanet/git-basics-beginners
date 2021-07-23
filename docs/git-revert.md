---
title: Git Revert
sidebar_position: 24
---

Another command that is used for undoing changes is **git revert** and this command creates a new commit
which reverts commit that you've specified in the command, so you can probably notice a difference here
between **git reset** command which moves *HEAD* and branch ref pointers, and **git revert** which
creates a new revert commit, this also means that this command will not change project history which makes
it safe operation for undoing changes. Let's see some examples.

```shell
➜  git-basics-beginners git:(master) touch git-revert.txt && git add git-revert.txt && git commit -m "Add git-revert.txt file"
[master 7079239] Add git-revert.txt file
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 git-revert.txt
```

```shell
➜  git-basics-beginners git:(master) echo "This is an example of git revert command" > git-revert.txt && git add .
➜  git-basics-beginners git:(master) ✗ git commit -m "Add content into git-revert.txt"
[master 1798147] Add content into git-revert.txt
 1 file changed, 1 insertion(+)
```

```shell
➜  git-basics-beginners git:(master) ✗ git commit -m "Add a new line into git-revert.txt"
[master e392351] Add a new line into git-revert.txt
 1 file changed, 1 insertion(+)
```

At this point we've created three commits. First, we added a new file,
then we've added the first and second line to git-revert.txt file.
For every action, we've made a separate commit, and we can see those commits using **git log** command,
I passed **-5** option to list me last 5 commits, and **--no-pager** option which just tells *git*
to not open list of logs in interactive pager view.

```shell
➜  git-basics-beginners git:(master) git --no-pager log --oneline -5
e392351 (HEAD -> master) Add a new line into git-revert.txt
1798147 Add content into git-revert.txt
7079239 Add git-revert.txt file
8cb327d Add Git Revert section
f9a723d (origin/master) Add git reset --hard explanation
```

```shell
➜  git-basics-beginners git:(master) cat git-revert.txt
This is an example of git revert command
This is a bad update
```

```shell
➜  git-basics-beginners git:(master) git revert HEAD
[master c4a011a] Fix bad update commit
 1 file changed, 1 deletion(-)
```

`git revert HEAD` will basically revert the last commit. By default it uses **--edit** option which will
open your default editor and ask you to edit commit message. Also, notice what **cat** command displays,
before we reverted the last commit we had two lines in git-revert.txt file and after revert we have one line
Now by inspecting our log history you can see that we now have one more commit.

```shell
➜  git-basics-beginners git:(master) cat git-revert.txt
This is an example of git revert command
```

```shell
➜  git-basics-beginners git:(master) git --no-pager log --oneline -5
c4a011a (HEAD -> master) Fix bad update commit
e392351 Add a new line into git-revert.txt
1798147 Add content into git-revert.txt
7079239 Add git-revert.txt file
8cb327d Add Git Revert section
```

You can pass **--no-edit** option to **git revert** command which will tell *git* to not open editor,
but this will add auto-generated commit message which will be `Revert <commit-message-of-reverted-commit>`
There is an option to not create commit **--no-commit** which you can pass to **git revert** command.
This will revert specified commit and add reverted changes into the *Staging Area*, so you can add more changes
and then make a new commit.


