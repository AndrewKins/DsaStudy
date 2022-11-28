/*
1. Maximize the Value
Rearrange an array of integers so that the calculated value U is
maximized. Among the arrangements that satisfy that test, choose
the array with minimal ordering. 

The value of U for an array with elements is calculated as :
U=arr/1]xarr/2]x(1÷arr[3))×arr[47x…..×arr/n-11×(1÷arrin))ifnis
odd
or
even
U=arr[11xarr!21x(1÷arr[31)xarr[4]x.….x/1÷arrin-11)xarrInlifnis
The sequence of operations is the same in either case, but the length
of the array, n, determines whether the calculation ends on arr[n] or
(1÷arrin]).
Arrange the elements to maximize U so the items are in the
numerically smallest possible order.
Example
arr = [21. 34. 5, 7, 91
To maximize U and minimize the order, arrange the array as [9, 21, 5,
34, 71 so U = 9 x 21 x (1÷5) x 34 x (1÷7) = 183.6. The same U can be
achieved using several other orders, e.g. (21, 9, 7, 34, 5] = 21 x9 x
(1÷7) × 34 × (1÷5) = 183.6, but thev are not in the minimum order.
Function Description
Complete the function rearrange in the editor.
rearrange has the following parameter(s):
int arrinl: an array of integers
Returns
int/n]: the elements of arr rearranged as described
*/







const maximizeU = (arr) => {
    const newArr = arr.sort((a,b) => a-b)
    let n = newArr.length
    let outPut = []
    let roundUp = newArr[Math.ceil(n / 2 - 1)]
    let roundDown = newArr[Math.ceil(n / 2)]
   outPut.push(roundUp,roundDown)
   console.log(outPut,'testing')

    // let j = arrLength % 2 === 0 ? (arrLength - 1) / 2 : arrLength / 2
    // console.log(newArr[j])
    //     outPut.push(newArr[Math.ceil(j++)])
    //     outPut.push(j++)
    //         for(let i = 2; i < arrLength; i += 1){
    //             console.log(newArr[i], 'test')
    //             if(i % 2 === 0){
    //                 outPut.push(newArr[Math.ceil(count++)])
    //             } else
    //                 outPut.push(newArr[Math.ceil(j++)])
    //         }
    //         return outPut



    outPut.push(newArr[Math.ceil(newArr.length/2 - 1)])
    outPut.push(newArr[Math.ceil (newArr.length/2)])
    newArr.splice (Math.ceil (newArr.length/2 - 1))
    let middlePointer = Math.ceil(newArr.length/2)
    console.log(middlePointer)
    for (let i = 0; i < newArr.length/2; i++){
    if(i === middlePointer){
        outPut.push(newArr[i])
        break
    }
    outPut.push(newArr[i])
    outPut.push(newArr[middlePointer])
    middlePointer++
}
return outPut
}

    

    
    
console.log(maximizeU([9,21,5,34,7]))
// console.log(maximizeU([[21,9,7,34,5]]))