/*

You are a developer for a university. Your current project is to develop a system for students to find courses they share with friends. The university has a system for querying courses students are enrolled in, returned as a list of (ID, course) pairs.

Write a function that takes in a collection of (student ID number, course name) pairs and returns, for every pair of students, a collection of all courses they share.


Sample Input:

enrollments1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"],
]



///

"58": ["Linear Algebra", "Mechanics", "Econmics", "SD"]
17:["SD", "LA", "PS"] 
94:["AH","OS", "Eco"]
25:["Eco"]

i - 0 to n 
j - i+1 to n 
58,17,94,25


58,94,94,17,58,58,17,17,25,58


"58,17"
"58,94"
"58,25"
"17,94"
""

///

Sample Output (pseudocode, in any order):

find_pairs(enrollments1) =>
{
  "58,17": ["Software Design", "Linear Algebra"]
  "58,94": ["Economics"]
  "58,25": ["Economics"]
  "94,25": ["Economics"]
  "17,94": []
  "17,25": []
}



Additional test cases:

Sample Input:

enrollments2 = [
  ["0", "Advanced Mechanics"],
  ["0", "Art History"],
  ["1", "Course 1"],
  ["1", "Course 2"],
  ["2", "Computer Architecture"],
  ["3", "Course 1"],
  ["3", "Course 2"],
  ["4", "Algorithms"]
]



Sample output:

find_pairs(enrollments2) =>
{
  "1,0":[]
  "2,0":[]
  "2,1":[]
  "3,0":[]
  "3,1":["Course 1", "Course 2"]
  "3,2":[]
  "4,0":[]
  "4,1":[]
  "4,2":[]
  "4,3":[]
} 

Sample Input:
enrollments3 = [
  ["23", "Software Design"], 
  ["3", "Advanced Mechanics"], 
  ["2", "Art History"], 
  ["33", "Another"],
]


Sample output:

find_pairs(enrollments3) =>
{
  "23,3": []
  "23,2": []
  "23,33":[]
  "3,2":  []
  "3,33": []
  "2,33": []
}

All Test Cases:
find_pairs(enrollments1)
find_pairs(enrollments2)
find_pairs(enrollments3)

Complexity analysis variables:

n: number of student,course pairs in the input
s: number of students
c: total number of courses being offered (note: The number of courses any student can take is bounded by a small constant)

*/


// const enrollments1 = [
//     ["58", "Linear Algebra"],
//     ["94", "Art History"],
//     ["94", "Operating Systems"],
//     ["17", "Software Design"],
//     ["58", "Mechanics"],
//     ["58", "Economics"],
//     ["17", "Linear Algebra"],
//     ["17", "Political Science"],
//     ["94", "Economics"],
//     ["25", "Economics"],
//     ["58", "Software Design"]
//   ];
  
//   const enrollments2 = [
//     ["0", "Advanced Mechanics"],
//     ["0", "Art History"],
//     ["1", "Course 1"],
//     ["1", "Course 2"],
//     ["2", "Computer Architecture"],
//     ["3", "Course 1"],
//     ["3", "Course 2"],
//     ["4", "Algorithms"]
//   ];
  
//   const enrollments3 = [
//     ["23", "Software Design"], 
//     ["3",  "Advanced Mechanics"], 
//     ["2",  "Art History"], 
//     ["33", "Another"]
//   ];




const idC = (array) => {
    let obj = {}
    for (let i = 0; i < array.length; i++) {
        console.log(array[i][0],'test')
        if (obj[array[i][1]]) {
            obj[array[i][1]].push(array[i][0])
        } else {
            obj[array[i][1]] = [array[i][0]]
        }
    }
    // console.log(obj)
    let obj2 = {}
    for (key in obj) {
      console.log(key,'test')
        if (obj[key].length > 1) {
            console.log(obj[key], 'testinggg')
            obj2[obj[key].join(', ')] = [key]
        }
    }
    console.log(obj2)
}
console.log(idC([
    ['58', 'Linear Algebra'],
    ['17', 'Linear Algebra'],
    ['58', 'Art History'],
    ['17', 'Art History'],
    ['94', 'Art History'],
    ['94', 'Operating Systems'],
    ['58', 'MeChanics'],
    ['58', 'Economics'],
    ['17', 'Political Science'],
    ['94', 'Economics'],
    ['25', 'Economics'],
    ['58', 'Software Design']
]))









