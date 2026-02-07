let employee = {
  firstName: "Deepak",
  lastName: "Koshy",
  age: 30,
  dateofBirth: new Date("May 17, 1984"),
  allocated:true
};

var empjon = JSON.stringify(employee);
console.log(empjon);
var empredableJson = JSON.stringify(employee,null,2);
console.log(empredableJson);

var emp1 = JSON.parse(empredableJson);
console.log(emp1);


