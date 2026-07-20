# Javascript Error Handling.

## General Info
* **Date:** [13/07/2026]
* **Course:** Error Handling

## Contents
* **Concept 1:** Types of Errors
* **Concept 2:** Error Object . tyr catch and finally blocks
* **Concept 3:** Custom Errors

## Types of Errors 

Javascript throw different types of errors during run time. Most common errors are 
        - Type Error (Evaluating a value of an unexpected data type.)
        - Reference Error (Referencing an undeclared variable)
        - Syntax Error 
        - Range Error (Using a numeric value outside its allowed boundary.)
        - URI Error
        - Internal Error
        - Eval Error
when an error is occurred and if it uncaught script execution will be interrupted and application exits. to avoid we can use try..catch block to take some remediation. We can also create custom error class by extending 'Error' . Unlike many other programming language  javascript doesn't have **'Exception class'** . An exception in JavaScript is simply the action of interrupting the normal application flow by throwing a value.

- Reference Error

        ```
            function referenceErrorcheck(){
            
                let result = 42
                console.log(check);
            }
            console.log(result);  //result variable is not accessible.
            referenceErrorcheck(); //check variable is not defined.
        ```
- Type Error

    ```
        let user  = {name:"Bob" , age:25};
        user();  //user is not a function

        let profile = null;
        profile.data = "profile data"; //assigning to a null variable

    ```
- Range Error

    ```
        let nums = new Array(-5); 
        let price = 89.56 
        console.log(price.toFixed(500));
    ```

## Custom Error Class Example

   ```
    class APIResponseError extends Error {

        constructor(statusCode, message) {
            super(message);
            this.status = statusCode;
            this.name = "ApiResponseError";

        }
    }

   ```