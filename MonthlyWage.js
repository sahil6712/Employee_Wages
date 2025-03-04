function getWorkingHours(empCheck) {
    switch (empCheck) {
        case 0: 
            return 0;
        case 1: 
            return 4;
        case 2: 
            return 8;
        default:
            return 0;
    }
}


const NUM_OF_WORKING_DAYS = 20;
const WAGE_PER_HOUR = 20; 

let empHrs = 0;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hrs: " + empHrs + " Emp Wage: " + empWage);
