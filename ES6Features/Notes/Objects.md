# Javascript Objects

## General Info
* **Date:** [17/07/2026]
* **Course:** Javascript Objects


## Contents
* **Concept 1:** How to crate Objects
* **Concept 2:** creating , reading ,modifying and deleting properties in Object.
* **Concept 3:** Controlling Accessability using Property descriptor.
* **Concept 4:** Iterating properties in Object.


## How to crate Objects

Objects can created in multiple ways. Three main ways are listed below

 - Object Literal syntax 
 - using  'new' with constructor defined in class or Factory function
 - using Object.Create()

The easy way to create an object is using literal syntax. Javascript is a prototype based language. All objects created using literal syntax  in javascript is linked to Object.prototype. when we access a property it checks the objects itself and if it not there goes down the prototype chain . In the below example 'courseTemplate' is an object which is by default linked to Object.prototype. The toString() method is directly defined in Object.prototype

    ```
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
            };

            let data = courseTemplate.toString();
            console.log(data)
 
    ```
We can create Object using new keyword along with constructor function. Below code create a Date object, which is linked to builtin prototype Date.prototype which in turn linked to 
Object.prototype 

  myDob --> Date.prototype --> Object.prototype

        ```
            let myDob = new Date("May 17 1984");
            console.log(myDob)
            console.log(myDob.getFullYear())

        ```
As all Objects in javascript linked to default Object.prototype we can create objects pointing to a custom prototype using Object.Create(). If a property not there in object it will check's the prototype till Object.prototype

        ```
          const  fourWheelerProto = {
            type:"not defined",
            wheels:4,
            model:"not defined",
            brand:"not defined"
          };
          
          let vokswagen = Object.create(fourWheelerProto);
          console.log(vokswagen.type);
          vokswagen.type = "car"
          vokswagen.model = 2025;
          vokswagen.brand = "s18";
          
          console.log(vokswagen);

        ```
  vokswagen --> fourWheelerProto --> Object.prototype
    
  ## creating , reading ,modifying and deleting properties in Object.

  we can add and access properties to an object using . or [] operators . we can delete a property by "delete vokswagen.barand"

 ## Controlling Accessability using Property descriptor.
          
 Best way to configure property descriptor is either using object.defineProperty() or object.create() pls find below examples. vokswagen object is linked to fourWheelerProto prototype.
 
        ```
          const  fourWheelerProto = {
            type:"not defined",
             model:"not defined",
            brand:"not defined"
          };

          fourWheelerProto.defineProperty("wheels" , {writable : false , configurable: false});

          let vokswagen = Object.create(fourWheelerProto);
          vokswagen.wheels = 6;
          connsole.log(vokswagen);
         
        ```
Since wheels property is configure as writable false , it can't be modified. Another approach is given below.

    ```
        const fourwheelerProto = Object.create(Object.prototype, {
            type: {
                value: "not defined",
                enumerable: true,
                writable: true
            },
            model: {
                value: "not defined",
                enumerable: true,
                writable: true
            },
            brand: {
                value: "not defined",
                enumerable: true,
                writable: true
            },
            wheel: {
                value: 4,
                enumerable: true,
            }

        });

        let vokswagen = Object.create(fourwheelerProto);
        vokswagen.wheels = 6;
        console.log(vokswagen.wheels);

    ```
If we want to make the prototype completely controlled we can make use of 
Object.freeze() ,Object.seal() or Object.preventExtensions()

    - Object.preventExtensions() (Level 1: No New Properties), properties can be deleted and edited
    - Object.seal() (Level 2: Fixed Structure) , properties can't be deleted , but editing is possible
    - Object.freeze() (Level 3: Completely Immutable) no modification allowed 

 Best way to utilize this method is given below . First create a prototype with standard Object literal syntax then apply any of the above methods to changes its configuration.Based on that  create new objects using Object.create().

   ```
        let courseTemplate = {
            title:"not defined",
            duration:4,
            startDate : new Date()
        }
        Object.seal(courseTemplate); 
        
        courseTemplate.settings = "this will not be set";
        let bsc = Object.create(courseTemplate);
        bsc.endDate = new Date();
        bsc.duration = 5;
        bsc.title = "Bachelor of communication";

        for(let k in bsc){
            console.log(`${k} - ${bsc[k]}`);
        }

   ```



## Iterating properties in Object

All enumerable properties are iterable. 

| Method / Statement | Own Properties? | Inherited Properties? | Enumerable Only? |
| :--- | :--- | :--- | :--- |
| **`for...in`** | **Yes** | **Yes** | **Yes** |
| `Object.keys()` | Yes | No | Yes |
| `Object.getOwnPropertyNames()` | Yes | No | No (Includes non-enumerable) |
