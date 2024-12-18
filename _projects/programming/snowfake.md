---
layout: article
title: Snowfake
tag: programming
image_url: /assets/img/projects/snowfake/snowfake.png
backlink: /programming.html
sortNumber: 2
---

Snowfake (also sometimes known as Game of Hex) is a hexagonal [Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) *like* [cellular automaton](https://en.wikipedia.org/wiki/Cellular_automaton).

Each cell on a hexagonal grid switches between being alive and dead each simulation step depending on certain simple rules, here the states of their adjacent cells.

![Snowfake](/assets/img/projects/snowfake/snowfake.png)

In our case, the set of rules we applied let complex behavior emerge, analogous to how snowflakes form following many of their mechanisms.

We made a graphical user interface with pygame and many fun features like the ability to save a GIF or print outlines for a laser cutter.

![Animated growing snowfalke](/assets/img/projects/snowfake/snowfake.gif)

I wrote the core simulation engine, integration of all my teammate's parts and wrote up [a presentation article](/assets/misc/SnowFakeTropheeArticle.pdf) to submit our game to a french lycée competition called Trophés de la NSI.

Our project won this international competition for [best Grade 11 project](https://trophees-nsi.fr/resultats).

You can find the code and documentation on [GitHub](https://github.com/SuperZooper3/Game-of-Hex) as well as our video presenting it on [YouTube](https://youtu.be/TqOEfdryWAk) and you can learn more about the project's details through our [presentation article (french)](/assets/misc/SnowFakeTropheeArticle.pdf).
