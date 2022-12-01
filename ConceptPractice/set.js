function hasPosNeg(array){
    let hasPos = false
    let hasNeg = false
    array.forEach(num => {
        hasPos = num > 0
        hasNeg = num < 0
    })

    return [hasPos, hasNeg]
}

console.log(hasPosNeg([]))
console.log(hasPosNeg([0,1,2]))
console.log(hasPosNeg([-1,0,1]))
console.log(hasPosNeg([0,-1,-2]))







