let employee = {
  name:"Deepak Koshy",
  strtDate : new Date("May 17, 1984"),
  numYearsOfService:10,
  isActive : true,
  department:"Hr",
  title:"Developer"
};

if(employee.numYearsOfService < 5)
   employee.badgeColour = "Blue";
else if(employee.numYearsOfService < 10)
  employee.badgeColour = "Yellow";
else if(employee.numYearsOfService <15)
  employee.badgeColour = "Green";
else if(employee.numYearsOfService < 20)
  employee.badgeColour = "Black";
else
  employee.badgeColour = "Red";

console.log(employee);

let anualBonus = (employee.numYearsOfService > 10) ? 15000 : 5000;
console.log(anualBonus);


//switch statement

switch(employee.department.toLocaleLowerCase())
{
  case "Engineering".toLocaleLowerCase() : 
          console.log("Meeting in First floor.");
          break;
  case "HR".toLocaleLowerCase():
  case "Finance".toLocaleLowerCase():
         console.log("Meeting in second Floor B wing.");
         break;
  default:
        console.log("Meeting in 3rd Floor open Space");
}
