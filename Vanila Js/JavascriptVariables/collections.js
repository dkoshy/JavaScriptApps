//array creation
let nums = [];
let num1 = [1, 2, 3];
let num3 = new Array();
let num4 = new Array(5, 10, 20);

let names = ["Deepak", "Bini", "Arun", "Akash", "Aneesh", "Asish"];

//accessing values
console.log(`array length ${names.length}`);
console.log(`First value ${names[0]}`);
console.log(`Last value ${names[names.length - 1]}`);
console.log(`Third value  ${names[2]}`);

//searching values
console.log(`Arun is there in Team: ${names.includes("Arun")}`);
console.log(
  `Kumar is part of the Team: ${names.indexOf("Kumar") > 0 ? "yes" : "no"}`
);

//Add values to Array

names.push("Santhosh"); //adding at the end
console.log(names);
names.unshift("Rashmi"); //adding at the beginning
console.log(names);
names.splice(1, 0, "James"); // inserting at index 1
console.log(names);

//removing elements
names.pop(); //removing last item
names.shift(); //removing  element at beginning
console.log(names);
names.splice(0, 1); //removing element at 0th
console.log(names);

//objects

let emp1 = {
  userName: "Deepak",
  place: "TRV",
};
let emp2 = {
  userName: "kumar",
  place: "SBC",
};
let emp3 = {
  userName: "Raju",
  place: "KTM",
};
let list = [emp1, emp2];
console.log(list);
