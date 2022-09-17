# Arrays

## Advantages

 - Contains Multiple Views
 - Accessed with Index `'[]'`

## Disadvantages

 - Add/Removing elements take up more memory
 - Need to be shifted one new elements are places anywhere other than the start or end of the array

## Common Terms

**Sub Array** - *Range of contigous values*

**Subsequence** -  *Can delete without changing order of remaining elements*

## Array Time Complexity

| Name | Runtime |Type|
|Access|O(1)|Constant|
| Search  | O(n) |Linear|
| Search(sorted) | O(log(n))|Logarithmic|
| Insert(anywhere)| O(n) | Linear |
| Insert(End)   |  0(1) | Constant |
| Remove | O(n)  | Linear |
| Remove(End) | O(1)  | Constant |

## Questions to Ask During Interview

Are there Duplicates?
Dont iterate out of bounds
Slicing/Concatenation

## Edge Cases

 - Empty Sequence
 - 1 or 2 elements
 - Repeated Elements
 - Duplicated Elements

## Techniques(May apply to strings)

**Sliding Window(SubArray, string)**
	 *two pointers move at the same time*
	 *Each value visited twice.*

**Two Pointers**
*Pointers can cross each other
Can be on different Arrays
Traversing from Right*

**Sorting The Array**
*Is the Array sorted?*
*Binary Search is faster than O(n)*

**Precomputation**
*Index has Hashkey
GIven a sequence
if interviewer ask for O(1) space
HashTable
if array > n.length
minus 1*

**Traversing through Array more than one**
*O(n)*

  

**

# MAP

## Creating a map

    const new Map();

## Methods

-

     .has (check if element is inside of map)
    
    - .get
    
    - .set 