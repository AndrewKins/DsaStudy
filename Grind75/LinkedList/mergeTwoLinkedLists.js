/*
Merge Two Sorted Linked Lists

P
    -Given two heads of linked lists (List 1 and List 2)
    -Merge the two lists into one sorted list
    The list should be made by splicing together the nodes of the first two lists.
    Return the head of the merged linked list.

    Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
E
    List 1 (2,6,8) List 2 (4,3,9)
    output: 2,3,4,6,8,9
D
    -Arrays
A
    -Initialize a node
    -Find a way to loop through the given nodes
    -May have to be sorted 
    -

    
C
*/

var mergeTwoLists = function(list1, list2) {
    if(!list1|| !list2) return list1|| list2
    if(list1.val < list2.val){
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    }
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
}
console.log(mergeTwoLists([1,2,4],[[1,3,4]]))