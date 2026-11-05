# superzooper3.github.io
My new portfolio!

Use `jekyll serve` to run the site locally.

Images are optimized losslessly, preserving their dimensions, pixels, transparency, and color profiles. Use `cwebp -lossless -z 6 -exact -metadata all input.png -o output.webp` for new PNG assets, keep the result only when it is smaller, and update every reference to the new filename. Keep the Apple touch icon and images with color metadata that WebP cannot preserve as PNG. Optimize JPEGs with `jpegtran -copy all -optimize -progressive input.jpg > output.jpg`, keeping the smaller file. Avoid lossy quantization when preserving the original quality.

Run `bundle exec jekyll clean` to remove the generated `_site` directory and Jekyll caches when you no longer need a local preview.

Using the [Jekyll](https://jekyllrb.com/) static site generator. See the [Quickstart Guide](https://jekyllrb.com/docs/step-by-step/01-setup/) for setup.
