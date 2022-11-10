// const evenNumbers = function(num) {
//     for(let ele of num) {
//         if(ele % 2 === 0) console.log(ele)
//     }
//     return "df"
// }

// console.log(evenNumbers([1,2,3,4,5,1,6,7,8,9,10]))


const hashMapPractice = (nums) => {
    let hashMap = {}
    for(let i = 0; i < nums.length; i += 1){
        if(!hashMap[nums[i]]){
            hashMap[nums[i]] = {
                data: []
            };
        } else
            hashMap[nums[i]] += 1
    }
    for(let ele in hashMap){
        console.log(Object.entries(hashMap), 'test')
    }
}
console.log(hashMapPractice(['egg','toast','bacon']))