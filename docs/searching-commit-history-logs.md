---
title: Git Grep
sidebar_position: 22
---

In the big projects, often you will find yourself in situations where you need to find the commit which
subject contains some text or to find the commit where changes include specified pattern,
*git* allows us to easily filter commits by using **grep** option. Let's see some examples.

If you want to search for commit that contains specified text in its subject:

```shell
➜  git-basics-beginners git:(master) git log --oneline --grep 'Fix'

005576b Fix typos in README.md files
1529837 Fix text in Three Trees section
2c107bb Fix link in Table of Contents
a3c5ab6 Fix typos in Git Reflog section
b892351 Fix typo in recursive merge section header
```

If you want to search for a case-insensitive pattern you can pass **-i** to **git log** command.
Next, if you want to search for the line numbers where git has found your specified search pattern:

```shell
➜  git-basics-beginners git:(master) git grep -n 'render()'

Header.js:13:  render() {
index.js:10:  render() {
```

**-n** or **--line-number** is an option to print line numbers. If you want to get a bit more context
and to see where the function is used and from where is called you can use **-p** or **--show-function** option.

```shell
➜  git-basics-beginners git:(master) ✗ git grep -p 'calculateWorkingDays'

index.js=3=class Index extends PureComponent {
index.js:13:    const workingDays = this.calculateWorkingDays(
index.js:21:  calculateWorkingDays(currentDate, endOfCurrentMonth) {
```

What is really useful with **git grep** is that allows us to search in any commit that we want.
So if we want to search for a specified pattern only in the current HEAD:

```shell
➜  git-basics-beginners git:(master) ✗ git grep 'render()' HEAD
```

with the same approach we can specify also **git commit SHA-1**:

```shell
➜  git-basics-beginners git:(master) ✗ git grep 'render()' 71d278e
```

or we can also specify multiple commit references. In the next example, it will search for render()
text in HEAD, HEAD~1 and HEAD~2:

```shell
➜  git-basics-beginners git:(master) ✗ git grep 'render()' HEAD HEAD~1 HEAD~2
```




