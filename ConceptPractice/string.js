function cleanNumbers(str){
    let newNumber = str.replace(/\D/g, "")
    console.log(newNumber)

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
}

console.log(cleanNumbers('919-621-9 388') === '9196219388')
console.log(cleanNumbers('919-621-') === '0000000000')
console.log(cleanNumbers('2-919-621-9388') === '0000000000')
console.log(cleanNumbers('+1 (919) 621-9388') === '9196219388')