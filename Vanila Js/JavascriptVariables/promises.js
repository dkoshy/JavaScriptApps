import fs from 'node:fs/promises';
import fcs, { promises } from 'node:fs';

fs.readFile("./data.txt","utf8")
.then( data =>{
   let jsondata = JSON.parse(data);
   console.log(jsondata);
   console.log("completed Parsing");
})
.then(() => fileRead("./data.txt"))
.then(data => console.log(data) )
.catch(err =>{
  console.log("Something went wrong.")
   throw err;
});


//a way to make a none promise functionality to return promise. 
const fileRead = async filePath => {
    return new Promise((resolve , reject) =>{
      //read file functionality with non promise version (call back).
      fcs.readFile(filePath,"utf8" , (err, data) =>{
         if(err)
         {
            reject(err);
         }
         let jsonData = JSON.parse(data);
         resolve(jsonData);
      });
   });
}

