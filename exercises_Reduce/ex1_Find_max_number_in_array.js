const arr = [2,5,8,0,-1,-8,7];
const max = arr.reduce ((accum, el)=>{
    if (el>accum) {
        return el  
    } else {
        return accum
    }
})
console.log(max);