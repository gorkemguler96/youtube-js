
const arr1 = [2,4,6,8]

const result1 = arr1.every(function (number){
    return number>=2
})

console.log(result1)

const users = [
    {
        name: "Tayfun",
        age: 27
    },
    {
        name: "Görkem",
        age: 26
    },
    {
        name: "Berkay",
        age: 28
    }
]

console.log(users.every((user)=>user.age>=18))
