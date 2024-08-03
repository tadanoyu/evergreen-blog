---
title: "html2canvas generates blurry images"
date: "April 3rd, 2024"
---

![](html2canvas%20generates%20blurry%20images/yourtrack-error2.webp)
You can use `scale` option in the code to increase the resolution.

```js
html2canvas(el, {
  scale: 2,
  onrendered: myRenderFunction
})
```

`scale` defaults to `window.devicePixelRatio`. This means, if we set `window.devicePixelRatio = 2` before the call to `html2canvas`, it'll to do the same job as scaling it to `2`.

![](html2canvas%20generates%20blurry%20images/yourtrack.webp)

## Reference
- [HTML2canvas generates Blurry images](https://stackoverflow.com/questions/22803825/html2canvas-generates-blurry-images)