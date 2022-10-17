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

const mergeTwoLists = (list1, list2) => {
    let Dummy = new ListNode(0)
    let current = Dummy

    while(list1 !== null && list2 !== null){
        if(list1.val < list2.val) current.next = list1;
            else Dummy.next = list2; break;
        }

    
    while(list1 !== null && list2 !== null){
        if(list1.val < list2.val){
            current.next = list1
            list1 = list1.next //moves to the next node
        } else {
            current.next = list2
            list2 = list2.next //moves to the next node
        }
            current = current.next;
        }
        if(list1 === null && list2 != null){
            current.next = list2;
        }
        else if(list1 != null && list2 === null){
            current.next = list1;
        }
        return Dummy.next;  
};
console.log(mergeTwoLists([1,2,4],[[1,3,4]]))