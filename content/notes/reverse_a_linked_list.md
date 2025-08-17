---
title: "Reverse a linked list"
---

# Reverse a linked list
#evergreen

* Initialize three pointers `prev = nil`, `curr = head`, and `next = nil`.
* Iterate through the linked list. In a loop, do the following:
  * Before changing the `curr.next`, store the next node 
    * `next = curr.next`
  * Now update the `curr.next` to the `prev` 
    * `curr.next = prev`
  * Update `prev` as `curr` and `curr` as `next` 
    * `prev = curr`
    * `curr = next`

```ruby
def reverse
	curr = @
	_prev = nil
	_next = nil

	while curr != nil
		_next = curr.next
		curr.next = _prev
		_prev = curr
		curr = _next
	end

	@head = _prev
end
```