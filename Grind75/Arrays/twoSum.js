/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/*
P
    -Return the index of two numbers that add up to 9
    -return the answer in any order
E
D
    Arrays
A
    -Declare a hashMap
    -Loop through the given array
    -If the target minus an array element equal to one of the two create a matching pairs variable
    check hashmap for matching pair, return if found else add to hashmap
C
*/
const twoSum = (nums, target) => {
    let hashMap = {}
    for(ele in nums){
        let matchingPairs = target - nums[ele]; //9 - 2
        console.log(matchingPairs, 'testingggggggg')
        if(hashMap[matchingPairs]){ //hashmap contains remainder above
            console.log(hashMap[matchingPairs], 'testingggg')
            return [hashMap[matchingPairs], ele] //return number and index
        } else
        hashMap[nums[ele]] = ele
    }
}

console.log(twoSum([2,7,11,15],9))