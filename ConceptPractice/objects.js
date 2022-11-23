//Definition

//objects are a collection of related values that stores multiple pieces of data about an entity.
//Contains key value pairs.
//Data is stored in a section of memory called heap 

//Objects can be initialized in 3 ways

//let obj = {}
//const models = new Obj

//Access properties of an Obj

//Bracket Notation
   // myObj['keyname']
    //use if key is a Number
    //string beginning with non alphanumeric character
//Dot Notation
    //myObj.keyname
    //can only use if key is character is a value

const user = {
    realname: 'andrew',
    age: '25',
    techstack: ['javascript','react','express','node']
}
// console.log(user)
// console.log(user['age']) //use brackets with strings to target value of the key
// console.log(user.techstack[1])
// console.log(user.techstack.length)
// console.log(user['techstack'][1])

for(let ele in user){
    // console.log(ele, 'testingg') //ele are the keys of the object
    // console.log(user[ele], 'what is this') //bracket notation targets values of the keys
    // console.log(user[ele], ele)
    console.log(user.ele)
} 