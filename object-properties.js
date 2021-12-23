const students = [
    {id : 41 , name : "Omar Sanny"},
    {id : 30 , name : "Mannannana"},
    {id : 35 , name : "Shabnur"},
    {id : 38 , name : "Afran Nisho"},
];

const names = students.map(student => student.name);
const itemFilter = students.filter(student => student.name);
const bigger = students.find(student => student.id > 30);
console.log(bigger);
console.log(itemFilter)