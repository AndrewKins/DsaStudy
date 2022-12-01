//Definition

//objects are a collection of related values that stores multiple pieces of data about an entity.
//Contains key value pairs.
//Data is stored in a section of memory called heap 

//Objects can be initialized in 3 ways

//let obj = {}
//const models = new Obj()

//Access properties of an Obj

//Bracket Notation
   // myObj['keyname']
    //use if key is a Number
    //string beginning with non alphanumeric character
//Dot Notation
    //myObj.keyname
    //can only use if key is character is a value

// const user = {
//     realname: 'andrew',
//     age: '25',
//     techstack: ['javascript','react','express','node']
// }
// // console.log(user)
// // console.log(user['age']) //use brackets with strings to target value of the key
// // console.log(user.techstack[1])
// // console.log(user.techstack.length)
// // console.log(user['techstack'][1])

// for(let ele in user){
//     // console.log(ele, 'testingg') //ele are the keys of the object
//     // console.log(user[ele], 'what is this') //bracket notation targets values of the keys
//     // console.log(user[ele], ele)
//     console.log(user.ele)
// } 


// const objTest = (arr) => {
//     let hashMap = {}
//     for(let i = 0; i < arr.length; i += 1){
//         if(!hashMap[arr[i]]){
//             hashMap[arr[i]] = 1
//         }else
//             hashMap[arr[i]]++
//             occurences.push(hashMap[arr])
//             // console.log(hashMap, 'testing')
//     }
//     console.log(hashMap)
// }



// console.log(objTest([1,2,5,5,7,3,9,10,1]))
 
let cat = {
    name: "Mary",
    age: 2,
    color: "black",
    mischievous: true
 }

 let catBreed = {
    breed: "Scottish Fold"
  }

  //combine two objects together
  let combinedCatInfo = Object.assign(cat,catBreed)



// const anotherObj = (newObj) => {
//     const catValues = Object.values(newObj) //returns all values from an object

//     // const catValues = Object.keys(newObj)//returns all keys from an Object

//     let allCats = Object.entries(newObj) //returns an array of key/value pairs
//     console.log(catValues)
//     console.log(allCats)


// }
// console.log(anotherObj(cat))


for (let key in cat) {
    if (cat.hasOwnProperty(key)) {
       console.log(key, cat[key]);
    }
 }

 console.log(cat.hasOwnProperty(), 'testinggg')
 
 
//  let keys = Object.keys(yourobject);
 
 
//   let keys = [];
//   for (let key in yourobject) {      
//       if (yourobject.hasOwnProperty(key)) keys.push(key);
//   }