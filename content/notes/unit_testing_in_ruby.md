---
title: "Unit Testing in Ruby"
date: "June 7th, 2024"
---

```ruby
require 'test/unit'

class MyTest < Test::Unit::TestCase
  def test_foo
    assert(true)
  end
end
```

The method name must start with a `test_` prefixes.
And then simply compile the ruby file and you'll get the test results.
