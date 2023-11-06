// Create 2 objects customers and teachers . Write function that will 
// count yearly salary of customers and teachers.

function countYearlySalary(groupOfPeople){

    for (const key in groupOfPeople) {
        let people = groupOfPeople[key]
        let salary = people.monthSalary * 12;
        let res =  `${people.name} ${people.surname}'s yearly salary is ${salary} `
        console.log(res);
      }    
}
   
const customers = {
    1: {
        name: "Karine",
        surname: "Abyan",
        monthSalary: 10
    },
    2: {
        name: "Aram",
        surname: "Poxosyan",
        monthSalary: 20
    },
    3: {
        name: "Alina",
        surname: "Sargsyan",
        monthSalary: 30
    }
}

const teachers = {
    1: {
        name: "Silva",
        surname: "Manukyan",
        monthSalary: 16
    },
    2: {
        name: "Nelli",
        surname: "Hovhannisyan",
        monthSalary:18
    }
}

countYearlySalary(customers);
countYearlySalary(teachers);

