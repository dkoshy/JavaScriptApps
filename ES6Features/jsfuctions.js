const taxCalculation = function (amount) {
    return +((amount + Number.EPSILON) * (5.6 / 100)).toFixed(2);
}
console.log(taxCalculation(50117));

const randomFrom010 = function () {
    return Math.floor(Math.random() * 11);
}

console.log(randomFrom010());

const randomGenarator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomGenarator(0,10));
console.log(randomGenarator(3,12));

const sum = function()
{
    let sum = 0;
    for(let n of arguments)
        sum += n;
    
    return sum;
}

console.log(sum(20,60,30,20));

const anotherSum = function(...nums)
{
  const sum =  nums.reduce((sum,n)=>{
    return sum + n;
   },0)
   return sum;
}
console.log(anotherSum(50,100,30,20));

const finDoubleOfall  = (...nums)=>{
   const result = nums.map( n=> n * 2);
   return result;
}
[...result] =  finDoubleOfall(5,6,7,8,10); //rest
console.log(result);
result =  [...finDoubleOfall(9,3,2,6,8,0,2)]; //spread
console.log(result);


//IIF
(function Init()
{
  console.log(`all values are initialized`);
})();

//higher order functions
//mainly used for call back

function performAddition(print,...nums)
{
  let result = nums.reduce((sum,n)=>{
    return sum + n;
  },0);
  print(result);
}

performAddition(r=>console.log(r),8,9,0,3,4,5,10);
