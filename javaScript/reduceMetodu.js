const numbers = [1,2,3,5]

let total = 0
numbers.map(i=>total += i)
console.log(total)

let total2= numbers.reduce((acc,number)=>{
    return acc+ number
},5)
console.log(total2)
