---
title: "Formatting - fill and alignment"
date: "April 11th, 2024"
---

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