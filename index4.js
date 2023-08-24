const IDCLab = {
    director:{
        name: "Jaemin Jo"
    },
    students: [
        {name:"John", id: 123},
        {name:"Jennie", id: 234},
        {name:"Juyeon",id: 345, graduated: true}
    ]
}

IDCLab.director="Jiwon Choi"

console.log(IDCLab.director)
console.log(IDCLab.director.name)

console.log(IDCLab.students)
console.log(IDCLab.students[0].name)

for (const student of IDCLab.students){
    if (student.graduated) console.log(student.name+" graduated")
    else console.log(student.name + " is studying")
}

typeof [1,2,3] // "object"
typeof {a:1, b:2} // "object"
typeof function(){} // "function"..?