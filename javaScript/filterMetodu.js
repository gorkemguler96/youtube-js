const numbers = [12,5,8,130,44]

const numberFilter = numbers.filter((number)=>!(number>10))
console.log(numberFilter)

const names = ['tayfun','Görkem','fatma','berkay','alara']

const nameFilter = names.filter((name)=>name.length>5)
console.log(nameFilter)

const result1 = names.filter((name)=>name.toLocaleLowerCase().includes('gö'))
console.log(result1)


// map fonksiyonu ile ilgili örnektir ekstra dosya açmak zor geldi

const kullanıcılar = [
    {
        name: "Ali",
        surName:"KIRAN",
        age: 27
    },
    {
        name: "Veli",
        surName:"DELİ",
        age: 31
    },
    {
        name: "Mami",
        surName:"SALİ",
        age: 26
    },
]


const date = new Date()
const kullanıcıMap = kullanıcılar.map((kullanici)=>{
    return {
        fullName: `${kullanici.name} ${kullanici.surName}`,
        yearOfBirth: date.getFullYear()-kullanici.age
    }

})
console.log(kullanıcıMap)
