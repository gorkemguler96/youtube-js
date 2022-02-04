// spread => ... (objeyi yada diziyi yay)
//rest
// 3dots syntax (...)

// const user = ['Tayfun','Mehmet','Gökhan']
//
// function getName(name1,name2,name3){
//     console.log(name1)
//     console.log(name2)
//     console.log(name3)
// }
// // getName(user[0],user[1],user[2])
// getName(...user)
//
// const user = {
//     name : 'Tayfun',
//     surname: 'Erbilen'
// }
//
// const newUser = {
//     ...user
// }
// newUser.surname = 'Çelik'
// console.log(newUser)
// console.log(user)


const box = document.querySelector('.box')
const wait = ms => new Promise(resolve=>setTimeout(resolve,ms))

wait(500)
    .then(()=>{
    box.classList.add('bigger')
        return wait(500)
})
.then(()=>{
    box.classList.add('move')
    return wait(500)
})
    .then(()=>{
        box.classList.add('circle')
        return wait(500)
    })
    .then(()=>{
        box.classList.add('colored')
        return wait(500)
    })
    .then(()=>{
        box.classList.remove('colored')
        return wait(500)
    })
    .then(()=>{
        box.classList.remove('circle')
        return wait(500)
    })
    .then(()=>{
        box.classList.remove('move')
        return wait(500)
    })
    .then(()=>{
        box.classList.remove('bigger')
    })
