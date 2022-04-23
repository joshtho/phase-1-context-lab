/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// Your code here
function createEmployeeRecord(employee) {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    
}
function createEmployeeRecords(employees) {
    return employees.map(employee => createEmployeeRecord(employee))
}


const createTimeInEvent = function (event) {
    let [date, hour] = event.split(" ")
    let newObj = {
    type: "TimeIn",
    hour: parseInt(hour),
    date
}
this.timeInEvents.push(newObj)
    return this
}
const createTimeOutEvent = function (event) {
    let [date, hour] = event.split(" ")
    let newObj = {
    type: "TimeOut",
    hour: parseInt(hour),
    date
}
this.timeOutEvents.push(newObj)
    return this
}
const hoursWorkedOnDate = function (date) {
    //console.log("record", recordObj, dateForm)
    const timeIn = this.timeInEvents.find(event => event.date === date)
    const timeOut = this.timeOutEvents.find(event => event.date === date)
    //console.log("timeinout", timeOut, timeIn)
    let hoursWorked = (timeOut.hour - timeIn.hour)/100
        return hoursWorked
}
const wagesEarnedOnDate = function (date) {
    let employeeHours = hoursWorkedOnDate.call(this, date)
    
        return this.payPerHour * employeeHours
}

    function calculatePayroll(arrOfRecords) {
        //console.log(arrOfRecords)
        return arrOfRecords.map(employee => allWagesFor.call(employee)).reduce((currentValue, total) => currentValue + total)
        
    //     const allDates = arrOfRecords.map(event => event.timeInEvents.date) 
    //     //map(event => event.date)
    //     console.log("HUUUUUURRR", allDates)
    // const employees = arrOfRecords.map(employee => wagesEarnedOnDate(employee, allDates))
    // //return employees
    // console.log("HEEEEEERRRREEEE", employees)
}

function findEmployeeByFirstName(employees, firstNameString) {
    return employees.find(emp => emp.firstName === firstNameString)
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

