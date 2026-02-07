let mp1 = new Map();
mp1.set("lang1" , "C#");
mp1.set("lang2" , "Java");
mp1.set(new Date().getFullYear() , "Number Key");
mp1.set([] , "array");
mp1.set(()=>"hi" , "function");
console.log(mp1);
console.log(`Size of map is : ${mp1.size}`);

//accessing 
console.log(`language 1 : ${mp1.get("lang1")}`);

//removing 
console.log(`Removing Lang 2`);
mp1.delete("lang2");
console.log(`Updated size is ${mp1.size}`);

//set

let names = new Set();
names.add("David");
names.add("Riju");
names.add("Bini");
names.add("Kumar");
names.add("David");
names.add("david");

console.log(names);
console.log(`size : ${names.size}`);

names.add({name:"raju",place:"tvm" });

console.log(names);
names.delete("david");
console.log(names);
names.clear();
console.log(names);

