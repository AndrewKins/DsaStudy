/*
Definition: 
The Map object holds key-value pairs and remembers the original insertion order of the keys...
    Any value both objects and primitive vales may be used as either a key or value.
        A key in the map may only occue once.
            Unique in the Maps Collection.
*/

/*

Iteration:
Iterated by key value pairs.
    -A for..of loop returns [key,value] For each iteration.
        -Insertion order - Order in which each key value pair was first inserted into the map using the Set() method
            -As long as there wasnt already a key in the map

            -for Each key,value
        for(let [k,v] of map){
        console.log(k,":",v)
}
*/

/*
Methods:
.set() - adds values to map
    .has() - checks for value in map returns boolean
        .get() returns value of key in the map
            .set() - sets value of key in the map
                .delete() - deletes element in map
                    .size() - returns length of map
                        .keys() - returns map keys
*/

/*
Implementation:

const contacts = new Map();

*/

let map = new Map();
map.set("Navin", "Java");
map.set("Kevin", 'ROD');
map.set('Gabe', 'VIP');
map.set("Tamisha", "Coach");

map.forEach((v,k) => {
    console.log(k,":",v)
})
for(let [k,v] of map){
    console.log(k,":",v)
}