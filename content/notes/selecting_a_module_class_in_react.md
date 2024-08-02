---
title: "Selecting a module class in React"
---

---
created: "2024-03-02 16:39:00"
from: "corbin / my room"
updatedFrom: "LEX B6", "corbin, living room sofa"
---

# Selecting a module class in React
#evergreen

When you create a module class in React, the rendered class name contains a random suffix string.

You can attempt the following to query select a `styles.header` which **wont** work:

```jsx
const header = document.querySelector(styles.header)
```

You actually need to wrap the whole thing as a class:

```jsx
const header = document.querySelector(`.${styles.header}`)
```
