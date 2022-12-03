// const firstRepeat = (str) => {
//     let newString = str.split('')
//     const charFreq = {}
//     for(let ele of newString){
//         if(!charFreq[ele]){
//            return charFreq
//         } else{
//             charFreq[ele] += 1
//         }
//         console.log(charFreq)
//     }

// }
// console.log(firstRepeat('reuben'))
// console.log(firstRepeat('anne'))
// console.log(firstRepeat('restaurant'))
// console.log(firstRepeat('paul'))


/*
Problem 
input: string 
output: string 
return the non repeating character, if there none, return "_"

examples:
input: "abcd" 
a, b, c, d 
output: "a"

input: "aaaabb"
output: "_"

input: "beepbeepboopboop"
output: "_"

DS
Stirng, 
object: key value pairs

 
{
    key: value,
    "a": 2, 
    "b": 2, 
    "c": 1
}

"aabbc"
     ^
 
Algorithm
declare an empty object 

iterate over the given string 
for each character: 
    is it a property in the obj? 
        if it is: increment value 
        if it is not: add the charcater as a propety to the object, set it's value to 1 
        
iterate over the string to find the first non-repeating char:
for each character in given string: 
    if the charcater has a value of 1 in the object:
    return the character 
    

return "_"

 */
function solution(str) {
    let freq = {}
    
    for(let i = 0; i < str.length; i++){
        let char = str[i]
        if(freq[char]){
            freq[char] += 1
        }else{
            freq[char] = 1
        }
    }
    
    for(let i = 0; i < str.length; i++){
        let char = str[i]
        if(freq[char] === 1){
            return char
        }
    }
    
    return "_"
}