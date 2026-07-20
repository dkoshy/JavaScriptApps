
//object literal syntax

myProfile = {
    firstName:"Deepak",
    lastName:"Koshy",
    dob:"17-05-1984"
}

console.log(myProfile);

//using new syntax to create object
today = new Date();
console.log(today.getFullYear());
today.isMyDob = false;
console.log(today);
console.log(Date.prototype);
console.log(today.toUTCString());
console.log(today.toISOString());
console.log(today.toDateString());
console.log(today.toString());
console.log(today.toLocaleString());

//using Object.create() 

myProfile = Object.create(Object.prototype);
myProfile.name = "Deepak";
myProfile.department = "IT";
myProfile.DOB = new Date("1984-05-17") //1. ISO 8601 Format (Highly Recommended)
myProfile.JoningDate = new Date("07/18/2022") //short date format
myProfile.ex = new Date("october 18 2029") //long date format
console.log(myProfile);

//creating custom prototype
let courseBlockPrototype = {
    id:123567,
    title: "default title ",
    place:"course center"

}

let java = Object.create(courseBlockPrototype);
java.description = "java is powerful";
console.log(java);

//creating , reading , updating and deleting props

if(Object.hasOwn(myProfile, "DOB"))
    delete myProfile.DOB
myProfile.dob = new Date("May 05 1984");
myProfile['IT'] = "finance";
console.log(myProfile);
console.log(myProfile.hasOwnProperty("IT"))
if("dob" in myProfile){
    console.log(`my date of birth  is ${myProfile.dob}`);
}

//Controlling accessability of properties using writable , readable and enumerable.
//prototype descriptors.


const fourWheelerProto = Object.create(Object.prototype, {
   wheels:{
     value: 4,
     writable:false,
     enumerable:true,
     configurable:false
   },
   color:{
    value:"Read",
    writable:true,
    enumerable:true,
    configurable:true
   }
});

let Volkswagen = Object.create(fourWheelerProto);
Volkswagen.model = "dts202";
Volkswagen.torck = 2202;

console.log("volkaswagen", Volkswagen);
for(let key of Object.keys(Volkswagen))
{
    console.log(Volkswagen[key]);
}

for(let key in Volkswagen)
{
    console.log(Volkswagen[key]);
}
*/
//Object.freeze() ,Object.seal() and Object.preventExtensions()


let courseTemplate = {
    get title()
    {
        return this._title ? this._title : "Not defined"
    },
    set title(value)
    {
        if(typeof value != "string" || value.length < 5)
            throw new Error("validation issue", {cause:"Please provide valid course title."})
        this._title = value;
    },
    duration: 2,
    startDate: new Date()
}
//const courseProto = Object.create(courseTemplate );
Object.seal(courseTemplate);
let mca = Object.create(courseTemplate);
delete mca.startDate;
mca.endDate = new Date("Aug 15 2029");
mca.duration = 3;
mca.title = "Master of compute Application"

for(let key  in mca)
{
    console.log(`${key} - ${mca[key]}`);
}

try{
 let bca = Object.create(courseTemplate);
 bca.title = "bca";
 bca.duration=3;
}
catch(err){
console.error(err.cause);
}

