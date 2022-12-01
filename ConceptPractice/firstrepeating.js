const firstRepeat = (str) => {
    let newString = str.split('')
    const charFreq = {}
    for(let ele of newString){
        if(!charFreq[ele]){
            charFreq[ele] = 1
        } else{
            charFreq[ele] += 1
        }
            if(Object.values(charFreq) === 2){
                return charFreq
            }
    }

}
console.log(firstRepeat('reuben'))
// console.log(firstRepeat('anne'))
// console.log(firstRepeat('restaurant'))
// console.log(firstRepeat('paul'))