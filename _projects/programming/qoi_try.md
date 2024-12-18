---
layout: article
title: QOI Try Image Compression
tag: programming
image_url: /assets/img/projects/qoi.png
backlink: /programming.html
sortNumber: 6
---

While working on my [Numworks image compression format](/projects/programming/numworks/), I learned about [The Quite Ok Image Format](https://qoiformat.org/).

It's a very lossless, very data efficient and it's whole documentation fits on one page! It's way simpler than PNG too, so I decided to implement it myself in python for fun.

My encoder and decoders each come out to less than two hundred lines each, and it was really interesting to study at the design choices, work with the ground level binary and debug.

*It's not fast at all, but you can find my code on [GitHub](https://github.com/SuperZooper3/qoi-try).*
