 const employees = [{
    "code": "CT7207",
    "salary": 13000,
    "id": 1003,
    "job": "Manager",
    "department": "Operations",
    "name": "Bently Smith",
    "hobbies": ["Sports", "Reading", "Painting"]
},

{
    "code": "CT7207",
    "salary": 11000,
    "id": 1010,
    "job": "Manager",
    "department": "Operations",
    "name": "Aently Smith",
    "hobbies": ["Sports", "Reading", "Painting"]
},
{
    "code": "CT7207",
    "salary": 40000,
    "id": 1004,
    "job": "Salesman",
    "department": "Reasearch",
    "name": "Bently Smith",
    "hobbies": ["Sports", "Reading", "Painting"]
},
{
    "code": "CT7207",
    "salary": 70000,
    "id": 1007,
    "job": "Salesman",
    "department": "Research",
    "name": "cently Smith",
    "hobbies": ["Sports", "Reading", "Painting"]
},]

// Get employee with id 1003.
    // console.log( employees.find(i => i.id === 1003))

// // . Get the index of an employee having id 1008.
    // console.log( employees.findIndex(i => i.id === 1003))

// // Get all salesman employees.
    // console.log( employees.filter(i => i.job === 'Salesman'))

//  Get employees having salaries greater than 40K.
    // console.log( employees.filter (i => i.salary >= 40000))  

//  Get employees having salaries greater than 50K and from the research department. 
    // console.log( employees.filter ( i=> i.salary > 50000 && i.department === 'Research'))

    //  Get only the name, job and annual salary of all employees.

    // console.log(employees.map(i =>({name : i.name, salary : i.salary}) ))

    // Get the first name and last name of all employees.
    // console.log(employees.map( i => {
        // const [firstName,lastName] = i.name.split(' ');
        // return {
        //     firstName:firstName,
        //     lastName:lastName
        // }
    // }))


//  Get name and salary of employees having salary greater than 10K but less than 20K ordered by name

// console.log( employees.filter(i => i.salary > 10000 && i.salary < 20000)
//                                 .map( i => ({name:i.name, salary : i.salary}))
//                                 .sort((emp1,emp2)=>{
//                                     const name1 = emp1.name.toLocaleLowerCase();
//                                     const name2 = emp2.name.toLocaleLowerCase();

//                                     if(name1 < name2){
//                                         return -1;

//                                     }
//                                     else if(name1 > name2){
//                                         return 1;

//                                     }
//                                     else{
//                                         return 0;
//                                     }

//                                 })
//                                 )


//  Return true if all employees have salaries greater than 10K.

// console.log( employees.filter(i => i.salary > 10000).length === employees.length)
// console.log(employees.every(i => i.salary > 10000))


// Return true if any employee is having a salary greater than 60K.

// console.log(employees.some(i=> i.salary > 60000))


//  Get employees whose hobby is Reading.

// console.log(employees.filter(i=>i.hobbies.some(hobby => hobby === 'Reading')))

// Get the sum of salaries of employees.

// console.log(employees.map(i => i.salary).reduce((accumulator,currentValue)=>currentValue + accumulator,0))

//  Get the max salary

let maxSalary = 0;
employees.forEach(i => {
    if(i.salary > maxSalary){
        maxSalary = i.salary;
    }
})
// console.log(maxSalary)


// console.log( Math.max(...employees.map(i => i.salary)))

// Get all distinct job names.
// console.log( Array.from(new Set(employees.map(i => i.job))))

// Get distinct hobbies.
// console.log( Array.from( new Set( employees.map(i => i.hobbies).flat())));
//  console.log(Array.from (new Set(employees.flatMap( i=> i.hobbies))))

//  Get employee name and likes as ('Likes Reading/Sports').

// console.log(employees.map(i => ({ name: i.name, Likes: 'Likes ' + i.hobbies.join('/')})))


//  Remove employee having id 1010

// const index = employees.findIndex(i => i.id === 1010)
// console.log(employees.splice(index,1)) 

//  Get sum of salary department wise.


// get distinct department first



console.log(Array.from( new Set(employees.map(i => i.department) ))  
.map(department => ({
    department,
    salary: employees.filter( i => i.department === department)
    .map( i => i.salary)
    .reduce((acc,current)=> current + acc,0)
}))) 