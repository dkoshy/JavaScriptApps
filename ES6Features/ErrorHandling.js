
//reference error

/*function referenceErrorcheck()
{
    let result = 42
    console.log(check);
}
//console.log(result);

referenceErrorcheck();

//type error
let user  = {name:"Bob" , age:25};
user();
let profile = null;
profile.data = "profile data"; 

//Range Error

let nums = new Array(-5); 
let price = 89.56 
console.log(price.toFixed(500));

*/

let finalAmount = 1234.890
const approval = () => {

    if (finalAmount > 1000)
        throw new Error("final cost should be less than rs10000"
            , { cause: "cost is above the budget." });
}

try {
    approval();
}
catch (error) {
    console.error(error.message);
    console.error(error.cause);
}

class APIResponseError extends Error {

    constructor(statusCode, message) {
        super(message);
        this.status = statusCode;
        this.name = "ApiResponseError";

    }
}

function getCustomerData(status){
  if(status == 404)
    throw new APIResponseError(status,"customer is not available in system.");
}

try{
    getCustomerData(404);
}
catch(error)
{
    if(error instanceof APIResponseError)
    {
        console.log(error.message)
    }
}