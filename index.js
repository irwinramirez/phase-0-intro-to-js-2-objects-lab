// Write your solution in this file!
const employee = {
    name: "Bob",
    streetAdress: "123 Test Road",
}
function updateEmployeeWithKeyAndValue(employee, name , bob){
    return {
        ...employee,
        [name]: bob, 
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, bob){
    employee [name] = bob
    return employee;
}
function deleteFromEmployeeByKey(employee,name, bob){
    let employeeByKey = {...employee}
    employeeByKey [name]= bob

    return employeeByKey;
}
function destructivelyDeleteFromEmployeeByKey(employee, name, bob){
    let destructiveEmployeeByKey = employee
    destructiveEmployeeByKey [name]= bob
    return employee;
}