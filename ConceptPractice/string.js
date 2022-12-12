//String object is used to manipulate a sequence of characters.

/*Some of the most-used operations on strings 
    -check their length, 
    -build and concatenate them using the + & += 
    -check for the existence or location of substrings with indexOf()
    -extracting substrings with the substring() method.
*/

/*
----Access individual character in a string.----

    "stringName".charAt(indexlocation)  

    "stringName"[indexlocation] 

----Return unicode of a character in a string.----
    "stringName".charCodeAt(indexlocation)

----Return the index number of a character/substring found in string----
    stringName.indexOf(searchString)
    stringName.indexOf(searchString, position(where to start))
    stringName.lastIndexOf(substr, [start]) - Starts at the end of the string
    stringName.match
*/



const fullName = 'Andrew'
const checkStringLocation = (str) => {
    // return str.charAt(2) //expected output is d
    // return str[2] //expected output is d again
    // return str.charCodeAt() //expected output unicode
    return fullName.indexOf('ndr') !== -1; //if it returns -1 then its false //can also be used to chech occurences
}

console.log(checkStringLocation(fullName))























/* function cleanNumbers(str){
   let newNumber = str.replace(/\D/g, "")
     console.log(newNumber
     if(newNumber.length < 10 || newNumber.length > 11){
         return '0000000000'
     }
     if(newNumber.length === 11){
         return string = newNumber.substring(1)
      }
     if(newNumber.length === 11 && newNumber.charAt() !== 11){
         return '0000000000'
     }
     else {
         return newNumber
     }
 
 console.log(cleanNumbers('919-621-9 388') === '9196219388')
 console.log(cleanNumbers('919-621-') === '0000000000')
 console.log(cleanNumbers('2-919-621-9388') === '0000000000')
 console.log(cleanNumbers('+1 (919) 621-9388') === '9196219388')
 */