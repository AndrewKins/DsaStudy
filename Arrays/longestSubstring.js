/*
P
    -Find the length of the longest substring without repeating characters
E
    input: "abcdeabcbb"
    output: 5
D
    -Arrays
A   -Set Solution
    -Declare a variable "Found" initialized with a new Map()
    -initialize a variable for starting index
    -initialize a variable that will contain max Lengt of substring;
    -Loop through the given input
    -check if the current map has a character s[i]
    -if the current mad has a character
    -The starting index will equal the the greater value using math.max
    -replace the set with the current value
    -maxLength will equal the current value minus the value afrwer the starting value or max length
    -return max length
C
*/

const lengthOfLongestSubstring = function(s) {
    const found = new Map();
    let start = 0;
    // keeps track of the starting index of the current substring.
    let maxLength = 0;
     // keeps track of the maximum substring length.
    
    for(let i = 0; i < s.length; i++) {
        // if the current char was seen, move the start to (1 + the last index of this char)
        // max prevents moving backward, 'start' can only move forward
        if(found.has(s[i])) start = Math.max(found.get(s[i]) + 1, start)
        found.set(s[i], i);
        // maximum of the current substring length and maxLen
        maxLength = Math.max(i - start + 1, maxLength);
    } 
    
    return maxLength;  
};

// console.log(lengthOfLongestSubstring("abcabcbb"))