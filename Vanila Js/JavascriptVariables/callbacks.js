import fs from "node:fs";

fs.readFile("./data.txt" , "utf8", (err ,data)=>
{
  if(err)
  {
    console.log(`Something went wrong while reading the file ${"data.tx"}`);
    throw err;
  }
  try{
   let jsonData = JSON.parse(data);
   console.log(jsonData);
   console.log("parsing competed");
  }
  catch(err)
  {
    console.error("Invalid data can't be parsed as json.");
    throw err;
  }
});