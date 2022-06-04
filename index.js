let employee = {
    name : "Liz", 
    streetAddress : "570 Jefferson"
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
  const newEmployee = {...employee};
  newEmployee[key] = value;

return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;

  return obj;
}

function deleteFromEmployeeByKey(obj, key) {
  const newObj = {...key};
  return newObj;
}
function destructivelyDeleteFromEmployeeByKey(obj, name) {
  delete employee.name;
  return employee;
}