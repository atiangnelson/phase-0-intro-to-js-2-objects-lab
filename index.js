// Write your solution in this file!
let employee ={
    name: "Sam",
    streetAddress: 11
}
let new_obj = {...employee}
 function updateEmployeeWithKeyAndValue(obj, key, value){
 new_obj[key]=value
 return new_obj
 }

updateEmployeeWithKeyAndValue(newEmployee,"Sam","4004")


function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
     obj[key]=value
     return obj
}
destructivelyUpdateEmployeeWithKeyAndValue(employee,` streetAddress`,`12`)



function deleteFromEmployeeByKey(obj, key){
    delete new_obj[key]
    return new_obj
    
}
deleteFromEmployeeByKey(deleted,"name")

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key]
    return obj
}
destructivelyDeleteFromEmployeeByKey(employee,"name")
