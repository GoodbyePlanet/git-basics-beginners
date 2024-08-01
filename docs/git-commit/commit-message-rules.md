---
title: Rules of the good commit message
sidebar_position: 3
---

If you are a beginner in programming world you are probably asking your self why good commit messages matter, and that is fine because you probably
haven't spent much time going through some bigger project repository logs.
But once you are there working on a big project where there are thousands of commits and you stumble on commit message that says
`Hopefully without bugs` or `fixed that bug before it happened` those commits will not tell you anything, you will not have any context and
the worst thing is that you will have to go through changes to actually understand what is the intention behind that particular commit,
that is why good commit message matters.

There are seven rules of good commit messages, and since this topic deserves a lot more then I can write here, I will just leave a link to a really good article
for you to read.

[Commit message rules](https://chris.beams.io/posts/git-commit/)

However I will emphasize a few of those rules that I think they are really important.

1. Use the imperative mood in the subject line of your commit message - When this rule is satisfied your subject line should be able to complete the following sentence.

`If applied, this commit will, _improve git reflog explanation section_`
also, one reason more to use imperative is that _git_ itself uses imperative as commit messages convention,
you can easily check that when you are for example doing merge commit, _git_ default commit message is:

```bash
7923afa Merge branch '012-add-header-section' into master
```

2. Capitalize the first letter of your subject line and do not end the subject line with a period.

3. Limit the subject line to 50 characters - When you keep the subject line of your commit messages at this length your subject line 
   is readable and concise but if you have more to say than make the subject line in 50 characters and write a body explaining the rest.
   Also, one important thing make sure that you pay more attention to `what and why` instead of `how` when you are writing commit message.

