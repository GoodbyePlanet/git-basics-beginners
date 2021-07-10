---
title: Ignoring files
sidebar_position: 11
---

When you have files in your project that you don't want to include in your commits then you can create `.gitignore` file in the root directory
of your project and specify all folders and files that you don't want to track and that *git* should ignore.

Examples:

Ignore all .json files => `\*.json`

Ignore all files in directory node_modules => `node_modules/`

Ignore all .pdf files in the docs/ directory and any of its subdirectories => `doc/\*_/_.pdf`
