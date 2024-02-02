---
title: "SecureHook"
date: 2023-12-12T20:41:14.000Z
draft: false
description: "Easily secure your webhooks from spam and token leaks"
---

I made the code behind [SecureHook](https://securehook.net), which is a project me and a friend are working on together to help secure Webhooks from spam and other things. Here, I work on the backend and the frontend (fullstack).

The project is made with following technologies:
- PHP
- Symfony 7
- Alpine.js
- CSS
- Twig
- HTML
- Docker
- PostgreSQL
- Nginx (used in Docker to expose the app)
- Caddy

This is also when I realized MVC is a great architecture for making apps. Previously, I was making apps in Go, which is very liberal when it comes to architecture. I think this is both a good and a bad thing, good because then you can do what works best for you, bad because then you can easily mess up when it comes to best practices (which I did, my code looked terrible).

This project also was when I realized Visual Studio Code sucks for PHP development (seriously, it does, just get [PhpStorm](https://www.jetbrains.com/phpstorm/) if you can)