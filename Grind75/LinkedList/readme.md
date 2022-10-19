# Linked Lists

## Types of LinkedLists

**Singly**

 - Each node points to the next node 
        - Last node points to null
**Doubly**

- Each node has two pointers
        - next 
            - points to the next node 
        - prev 
            - which points to the previous node. 
    The prev pointer of the first node and 
    the next pointer of the last node point to null.
**Circular**

 - A singly linked list where the last node points back to the first node. 
    - There is a circular doubly linked list variant where 
        - the prev pointer of the first node points to the last node and 
        - the next pointer of the last node points to the first node.