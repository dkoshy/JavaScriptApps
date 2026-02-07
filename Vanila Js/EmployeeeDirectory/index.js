import createPrompt from "prompt-sync";
import employees from "./data.json" with { type: "json" };
let prompt = createPrompt();


//Application Functions ..........................................

function listEmployees(){
/*
  for(let emp of employees)
    {
      for(let property in emp)
      {
        console.log(`${property} : ${emp[property]}`);
      }
      console.log('');
      prompt("Please enter to list next employee");
    }*/
    employees.forEach(emp =>{
      logEmployee(emp);
      console.log('');
      prompt("Please enter to list next employee");
    });
    console.log("Employee list is completed.");
}

//function Expression
const addEmployees = function()
{
 let employee = {};
  employee.firstName = getInput("Enter First Name: " , isValidString );
  employee.lastName = getInput("Enter Last Name: " , isValidString);
  let joiningYear = getInput("Enter year: " , isValidNumber(1990 , 2023) , Number);
  let joiningMonth = getInput("Enter Month: " , isValidNumber(1,12) , Number);
  let joiningDate = getInput("Enter Date: " , isValidNumber(1,31) , Number);
  employee.dateOfJoining = new Date(joiningYear,joiningMonth-1,joiningDate);
  employee.isActive = getInput("Is Employee Active: " , isValidStatus , i=> i === "yes"); 
 console.log('');
  logEmployee(employee);
  // let jsonEmployee = JSON.stringify(employee, null, 2);
  // console.log(jsonEmployee);
  employees.push(employee);
}

function getInput(promptMessage="Enter a Value" , validationMethod , transformationMethod)
{
  let userInput = prompt(promptMessage);

  if(validationMethod && !validationMethod(userInput))
  {
    console.error("Invalid user Input");
    getInput(promptMessage , validationMethod , transformationMethod);
  }
  if(transformationMethod)
  {
    return transformationMethod(userInput);
  }
  return userInput;
}

function searchById()
{
  let id = getInput("Enter User Id: ", null , Number);
  let result = employees.find(e => e.id === id); 
  if(result)
  {
    logEmployee(result);
  }
  else{
    console.log("Employee not available.");
  }
}

function searchByName()
{
  let firstName = getInput("Enter first name: ").toLowerCase();
  let lastName = getInput("Enter last name: ").toLowerCase();

  let result = employees.filter(e =>{
    if(firstName && !e.firstName.toLowerCase().includes(firstName))
       return false;
    if(lastName && !e.lastName.toLowerCase().includes(lastName))
      return false;
    return true;
  });

  result.forEach( (e, i) => {
    console.log("");
    console.log(`Search result ${i+1}..............` );
    logEmployee(e);
  });
}
//Validation Functions ..............................................
const isValidString = (input) => (input) ? true : false;

const isValidYear = (input) => {
  let value = Number(input);
  return (Number.isInteger(value) && value >= 1990 && value <= 2025) 
                            ? true : false;
}
const isValidMonth = (input) =>{
  let value = Number(input);
   return (Number.isInteger(value) && value >= 1 && value <= 12) 
                            ? true : false;
}
                          
const isValidDate = (input) => {
  let value = Number(input);
   return (Number.isInteger(value) && value >= 1 && value <= 31) 
          ? true : false;
}

const isValidNumber = function(min , max)
{
   return (input) => {
     let value = Number(input);
     if(!Number.isInteger(value) || value <  min || value > max)
     {
      return false;
     }
     return true;
   }
}

const isValidStatus = (input) => input.toLocaleLowerCase() === "yes" 
                  || input.toLocaleLowerCase() === "no" ? true : false;


//Util Functions ..................................................
 const logEmployee = (emp) =>{
  Object.entries(emp).forEach(e => {
   console.log(`${e[0]}: ${e[1]}`);
  });
 }

//capture the custom user command.
const cmd = process.argv[2] ? process.argv[2].toLocaleLowerCase() : "";

if(cmd === "list")
{
    listEmployees();
}
else if(cmd === "add")
{
    addEmployees();
}
else if(cmd === "search-by-id" )
{
 searchById();
}
else if(cmd  === "search-by-name")
{
  searchByName();
}
else
  {
   console.log("Unsupported Command, please try with 'list or add' options");
   process.exit(1);
}
