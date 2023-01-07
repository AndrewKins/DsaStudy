/*
Definition - Lets your store unique values of any type whether primitive values or object references.
    -Collection of values - May only occur Once. UNIQUE to SET Collection
        -Contain a mix of different data types
            -Dynamically sized, dont have to declare a size

-Can iterate through the elements of a set in INSERTION ORDER.
    -Order in which the element was inserted using the add() method. 
        -Make sure theres not an identical element already in the set.
            -Iterables so they can be iterated using for of loop

            -SEARCHING AND DELETING an ELEMENT in SET is FASTER than ARRAYS
*/

/*
Initialize a SET
    Set() - Creates new set Object
    let/const setName = newSet(values) OR let/const setName = new Set() then use .add()     
*/

/*
METHODS
    .add() - Adds values to the set
        .has() 0 checks for one value / returns boolean
            .delete(value) - deletes an element from a set
                .size() = returns length of set
                    .clear() - deletes all values in the set
*/


/*
ITERATE THROUGH A SET
    .ForEach()
        Using For OF Loop
*/


// let nums = new Set("bookkeeper"); //adds no duplicate elements
let nums = new Set() 
nums.add(3)
nums.add("Kevin")
nums.add("Gabe")
nums.add([1,2,3])

let set = new Set([1,2,3])
set.add("Kevin")
console.log(set)
for(const item of set) {
    console.log(item, 'testloop')
}
// nums.forEach(value => {
//     console.log(value);
// })

// nums.forEach(value => {
//     console.log(value);
// })


// console.log(nums) //print all values
// console.log(nums.has("Kevin")); //





