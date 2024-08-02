---
title: "Formatting - fill and alignment"
---

---
created: "Thu, Apr 11, 2024 10:14 AM"
from: "Korea, bus 대구->서울"
updatedFrom: "corbin, living room sofa"
---

# Formatting - fill and alignment
#evergreen

left-aligned in 20 columns, including the text.
```rust
println!("{:<20}", "Hello");

// Hello_______________
```

right-aligned
```rust
println!("{:>20}", "Hello");
// _______________Hello
```

center-aligned
```rust
println!("{:^20}", "Hello");
// _______Hello________
```

Fill spaces with a designated character (e.g. `-`, `~`)
``` rust
println!("{:-<20}", "Hello");
println!("{:~<20}", "Hello");
// Hello---------------
// Hello~~~~~~~~~~~~~~~
```

## Reference
- [std::fmt - Rust](https://doc.rust-lang.org/std/fmt/#fillalignment)