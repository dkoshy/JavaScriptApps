function logSomething(message)
{
   return new Promise((re,rj) => {

     console.log("this is async function! " + message);
     re(); //indicating task is done.
   });
}

logSomething("Hello there")
.then(() => {
    console.log("Promise Executed!");
});


const flightDetails = function()
{
    return fetch("http://127.0.0.1:5500/flight-details.json");
}

flightDetails()
 .then(res => res.json()) // this line is also a promise so that next then
 .then(flights => { 
    console.log(1, flights);
    console.log(2, Array.isArray(flights) , typeof(flights));
 });


 
//simple fetch command

fetch("http://127.0.0.1:5500/flight-details.json")
 .then(response => response.json())
 .then(flights => {
    console.log(3,flights);
 });