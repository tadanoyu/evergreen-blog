---
title: "Convert an uppercase to a lowercase using ASCII values"
category: ''
pubDate: 'May 15 2024 18:29'
---

A computer cannot distinguish between a number and a character. In fact, everything is a number. It depends on the developer whether to treat `65` and `97` as numbers or characters, which are `A` and `a`, respectively. 

The difference between upper and lower character in ASCII code is `32`. We can use this value to convert an uppercase into a lowercase.

```c
#include <stdio.h>
int main(void) {
	char a = 'a';
	char z = 'z';
	printf("lowercase: %c   /  uppercase: %c\n", a, a-32);
	printf("lowercase: %c   /  uppercase: %c\n", z, z-32);

	int n = 97;
	printf("%d / %c\n", n, n);
	printf("%d / %c\n", n+1, n+1);

	return 0;
}
```
