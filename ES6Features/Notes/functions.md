# Javascript Functions

## General Info
* **Date:** [10/07/2026]
* **Course:** Javascript Functions


## Contents
* **Concept 1:** How to crate functions
* **Concept 2:** Specifying Parameters and passing arguments
* **Concept 3:** Parameters , Arguments array and rest
* **Concept 4:** IIF
* **Concept 5:** Higher order function
* **Concept 6:** Methods Getters and Setters
* **Concept 7:** Javascript Scope and Closure
* **Concept 8:** this Keyword
* **Concept 9:** Controlling the Value of “this” Using bind(), call() and apply()
* **Concept 10:** Async Functions


## Lecture Notes
   #### Different ways to create Javascript functions  

   - Function declaration
   - Function expression
   - Arrow functions
   - Function constructor
   
        
            ```
            //function declaration
            function TaxCalculation(amount)
                {
                return amount * (5.6/100);
                }


            //function expression 
            const randomFrom010 = function()
                {
                    return  Math.floor( Math.random() * 11);
                }

                //arrow function
                const randomGenerator = (min, max) => {
                return Math.floor(Math.random() * (max - min + 1)) + min;
                }

            ```

Function expression is the best method to use for all general purpose scenarios. Function declarations are hosted so we can avoid those kind of errors. arrow functions are also a better choice with some **limitations on accessing arguments array and this**

## Parameters , Arguments array and rest

Arguments array contains all parameters passed to the function. we can loop that array. But using arguments array is very error prone so that we usually specify parameters while declaring functions. another option is rest operator.

       ```
            const sum = function()
            {
                let sum = 0;
                for(let n of arguments)
                    sum += n;
                
                return sum;
            }
          
          console.log(sum())
        ```

please note the usage of rest operator.

        ```
         const anotherSum = function(...nums)
            {
                    const sum =  nums.reduce((sum,n)=>{
                        return sum + n;
                    },0)
                    return sum;
            }
            console.log(anotherSum(50,100,30,20));
        let result = [...anotherSum(7,8,9,0,6)];
        ```

## IIF (Immediately Invocable function)

This kind of functions are used to initialization purpose and invoked immediately once declared.

    ```
        (function Init()
        {
        console.log(`all values are initialized`);
        })();

    ```


## Higher order function

This kid of functions accepts other function as input. It is mainly used for callback.

        ```

            function performAddition(print,...nums)
            {
            let result = nums.reduce((sum,n)=>{
                return sum + n;
            },0);
            print(result);
            }

            performAddition(r=>console.log(r),8,9,0,3,4,5,10);


        ```

--


## Methods Getters and Setters

A function defined withing Object literal or class. Methods can be instance methods and Static. Methods can also be private to the class or public. A getter is used to access the data ans setter is used to modify it. Getters are used for computed properties and encapsulation. Setters are used for validation and encapsulation. Private methods and members are defined by prefixing name with '#' .

    ```
            class User{
                #salary;
                #taxPercent = 3.5;

                constructor(firstName, lastName,place,dob){
                    this.firstName = firstName,
                    this.lastName = lastName,
                    this.place = place,
                    this.dateOfBirth = dob
                }

                get fullName(){
                    return `${this.firstName} ${this.lastName}`;
                }
                get salary(){
                    return this.#salary
                }
                
                set salary(value){
                    this.#salary = value;
                }
                
                #calculateDeduction()
                {
                    return  this.#salary * (this.#taxPercent /100);
                }

                getMonthlyPay()
                {
                    return this.#salary - this.#calculateDeduction();
                }
                
                print(){
                    console.log(this);
                }
                

            }

            let Emp1 = new User("Deepak","Koshy","Bangalore" , new Date("17/05/1984"));
            Emp1.salary = 50000;
            console.log(`***** Details Of ${Emp1.fullName} *****`);
            Emp1.print();
            console.log(`Total CTC is ${Emp1.salary}`);
            console.log(`Monthly Salary of ${Emp1.fullName} is ${Emp1.getMonthlyPay()}`)


    ```
## Javascript Scope and Closure

Scope is the context where variables and expression are available or visible. Javascript has three scope global, function and block.
Closure is the combination of function and the lexical environment within which that function is declared. In this feature inner function has access to the variables of outer function. In the below example parent function execution is completed when child function is called, but child function can access the variable 'userName'. 


    ```
            let user= {};
            let createUser;
            (function initialize(name)
            {
            let userName = name; 

                createUser = function(){
                user.userName = userName;
                    console.log(`user ${userName} is created` );
                }
                
            })("Deepak");

            createUser();  //userName variable is still accessible because     console.log(user);  //of closure.


    ```

## this Keyword

'this' has point to different things in different scenarios like Global context, strict/non strict mode, Methods , Constructor functions,  Arrow-functions.

In the Global context 'this' inside a function refers the Window or global node.js Object. If you want to limit the global scope we can apply strict mode 'use strict'. When a function is used as a constructor it's 'this' is bound to the new object created. In Methods inside class it refers to the invoking Object.

But inside a static method 'this' refers to class not the Object.Some of the static built-in static methods are Math.max() , Array.from() , Object.keys() ..etc. Static methods are used as utility or helper functions and used as alternative to constructor functions in special scenarios.

 **'this' outside a function ,I mean a top level 'this' in nodejs environment points to 'module.exports'** This is happening because Node.js automatically wraps the code of every JavaScript file inside an invisible function before running it.

    ```
            (function (exports, require, module, __filename, __dirname) {
                this.name = "Deepak Koshy"; // Your code runs inside here
            });

     ```
## Controlling the Value of “this” Using bind(), call() and apply()

bind()- Creates a new function that has its “this” set to the provided value
call() - A function that can change the value of “this” when invoking a function
apply() - Very similar to call(). Can pass an array as an argument list instead of using a rest parameter for arguments

Function.prototype.bind(thisObj)
Function.prototype.bind(thisObj, arg1, arg2…)

Function.prototype.call(thisObj)
Function.prototype.call(thisObj, args1, args2, ...)

Function.prototype.apply(thisObj)
Function.prototype.apply(thisObj, [arg1, arg2…])

       ```
        const aircraft = {
            model: "Airbus A330", 
            totalSeats: 350, 
            seatsOccupied: 100
        };

        const addPassengers = function (nbPassengers) {
        const newCount = this.seatsOccupied + nbPassengers;
            if (newCount <= this.totalSeats) {
                this.seatsOccupied = newCount;
            } 
            console.log(this.seatsOccupied);
        };

        var bindAircraft = addPassengers.bind(aircraft,0);
        bindAircraft();
        addPassengers.call(aircraft , 10);
        addPassengers.apply(aircraft,[50]);

       ````
## Async Functions

Promise is an object returned by an asynchronous function that represents its current state of execution. A promise can be created by new Promise()  constructor which accepts a function with two important parameters resolve and reject . when the task is completed successfully resolve() is invoked otherwise reject() is invoked. 
 A function returning promise can have then() and catch() blocks then has success state catch has issues.
 Modern javascript use async/await pattern rather Promise.

 