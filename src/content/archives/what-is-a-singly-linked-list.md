---
title: "What is a Singly Linked List?"
category: "eda"
pubDate: "Nov 13 2024 12:32:00"
updatedDate: "Nov 19 2024 17:30:00"
---

Singly linked list is a [linked list](/note/what-is-a-linked-list) data structure that enables you to manage variable-sized collections of elements. Unlike C-style arrays, linked list can grow or shrink dynamically which is good for cases where number of elements are unknown beforehand.

Elements in the linked list are called nodes. A node contains two information: _the value_ and _a pointer_ to the next node. 

```text
    head                              tail
[node|value] --> [node|value] --> [node|value] --> nil
```

The node structure can change based on the type of a linked list ([The type of a linked list is determined by the structure of a node](/note/the-type-of-a-linked-list-is-determined-by-the-structure-of-a-node)).

Singly linked list can be a good fit if sequences are important; also good to use if you can sacrifice lookup performance for the optimal writes (inserts).

Here are some common and not so common but useful methods used to implement a singly linked list:
- `insert(item)`
- `pop_back` - remove the last node
- `pop_front` - remove the first node
- `remove(item)` - find a node that has `item` and remove it
- `cat(list)` - catenate two lists together
- `clear` - empty the list
- `find_first(&predicate)` - get the first element that satisfies a given predicate
- `each` - yield items one at a time until the list is exhausted
- `display` - print all elements in the list

Some methods may look weird especially `find_first(&predicate)`. This is Ruby-specific, because ruby allows you to [pass a block as an argument](/note/passing-a-block-as-an-argument) in the method.

```rb
class SinglyLinkedList 
    attr_accessor :head, :tail, :length

    class Node
        attr_accessor :data, :next

        def initialize(item)
            @data = item
            @next = nil
        end
    end

    def initialize 
        @head = nil
        @tail = nil
        @length = 0
    end

    def insert item 
        new_node = Node.new(item)

        if @head == nil 
            @head = new_node
            @tail = new_node
        else
            @tail.next = new_node
            @tail = @tail.next
        end

        @length += 1
    end

    def pop_back
        return nil unless @tail
        ret = nil

        if @head == @tail 
            ret = @head.data
            @head = nil
            @tail = nil
        else
            curr = @head

            while curr && curr.next != @tail
                curr = curr.next
            end

            ret = curr.next.data
            curr.next = nil
            @tail = curr
        end

        @length -= 1
        ret
    end

    def pop_front
        return nil unless @head
        ret = nil

        if @head == @tail
            ret = @head.data
            @head = nil
            @tail = nil
        else
            ret = @head.data
            @head = @head.next
        end

        @length -= 1
        ret
    end

    def remove item
        return nil unless head

        return pop_front if @head.data == item 
        return pop_back if @tail.data == item 

        curr = @head

        while curr && curr.next
            if curr.next.data == item 
                curr.next = curr.next.next
                @length -= 1
                return
            end
            curr = curr.next
        end

        nil
    end

    def cat list
        if @head == nil
            @head = list.head
            @tail = list.tail
        else
            @tail.next = list.head
            @tail = list.tail
        end

        @length += list.length
        list = nil
    end

    def clear
        while @length > 0
            pop_front
        end
    end

    def find_first &predicate
        return nil unless block_given?

        curr = @head
        while curr
            return curr if predicate.call(curr)
            curr = curr.next
        end
    end

    def each
        return nil unless block_given?

        curr = @head
        while curr
            yield curr
            curr = curr.next
        end
    end

    def display
        return nil unless @length > 0

        each {|item| puts item.data }
    end
end
```