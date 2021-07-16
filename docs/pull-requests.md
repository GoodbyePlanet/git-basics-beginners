---
title: Pull Requests
sidebar_position: 19
---

In this section I want to talk about **Pull Requests**, what they are, and how to create a good **Pull Request**.
**Pull Request** is a feature that *GitHub* offers and that developers can use to discuss newly implemented features before they agree
to integrate them into the *master* branch or whatever branch development team use for production-ready code.
It works in a very simple manner. When a developer finishes his work on a feature he can submit **Pull Request**,
then other team members should review the code, post some comments if they notice some problems in the code and at the end,
once all members of the team involved in code review give their OK, the feature can be merged into branch used for production.

When you are creating **Pull Request** it is a good practice to create a good description of your work for your team members so it is
easier for them to start reviewing your **Pull Request**. Here is one example of good **Pull Request** description:

`53 - Add RookieService to handle all checks and calculation related to rookie`

```Summary of code changes:
* Added RookieService class and implemented functionality to calculate remaining
 and current vacation days

* Deleted unused code

* Improved naming and fix typos

* RookieService should update the remaining vacation days and current vacation days 
for employees that are employed less than 6 months. For all other employees,
the implementation should remain the same.

To test, set employment date to less than 6 months and try to add request via dashboard.
```


