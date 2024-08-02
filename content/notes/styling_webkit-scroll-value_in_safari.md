---
title: "styling webkit-scroll-value in safari"
---

---
created: "2024-03-02 16:25:03"
from: "corbin / my room"
updatedFrom: "LEX B6", "corbin, living room sofa"
---

# styling webkit-scroll-value in safari
#evergreen

Before styling `webkit-scroll-value` in Safari, it's essential to reset its existing styles. Otherwise, your style wont be applied.

```css
progress[value] {
	-webkit-apperance: none;
	appearance: none;
}
```

## Reference
- [My progress bar styles are not working?](https://stackoverflow.com/questions/32189050/my-progress-bar-styles-are-not-working)