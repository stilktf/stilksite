---
title: "[WinError 10038] An operation was attempted on something that is not a socket"
description: "Rar problem fra Windows jeg kom borti, og hvordan jeg løste det"
date: 2024-01-05T20:57:47+01:00
draft: false
---

# Løsningen

Jeg skal bare fortelle deg hvordan jeg løste det i stedet for å kaste bort tiden din med en lang historie om livet mitt eller noe.

Kjør dette i en terminal, så start PC-en din på nytt:

```
net winsock reset
```

Jeg kom borti dette mens jeg kodet en Flask-app, og fant ut at å nullstille Winsock tjenesten fikset problemet mitt. Forhåpendligvis har jeg løst problemet ditt.