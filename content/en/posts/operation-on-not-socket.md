---
title: "[WinError 10038] An operation was attempted on something that is not a socket"
description: "Weird Windows issue I ran into, and how I fixed it"
date: 2024-01-05T20:57:47+01:00
draft: false
---

# The solution

Ok, I'll just cut right to the chase instead of writing some long story about my life or whatever.

Run this in a terminal, then restart your computer:

```
net winsock reset
```

I ran into the bug in the title while developing a Flask application, and found that resetting the Winsock service solved it. So here you go, (hopefully) the solution to your problem.