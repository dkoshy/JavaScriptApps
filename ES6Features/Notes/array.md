# Javascript Array , Maps , Set and TypedArray.

## General Info
* **Date:** [18/07/2026]
* **Course:** Array , Maps , Set and TypedArray

## Contents
* **Concept 1:** Creating Arrays and Basic manipulations
* **Concept 2:** Array Functions and Iteration
* **Concept 3:** Map Set and TypedArray

## Creating Arrays and Basic manipulations.

array can be defined in multiple ways. Which method has to be used depends on the scenario. 
 - Array literal syntax 
 - New Array() *
 - Array.of()
 - Array.from()
 - Object.create(Array.prototype) *

 The standard way to create array is  using literal syntax which has a consistent behavior so safe to use.

        ```
            let nums = [];
            let digits = [3];
            let data = [5,6,7,8];
            console.log(nums , digits , data);
            nums[0] = 10;
            nums[1] = 11;
            console.log(nums);
            
            //output
            //[] [ 3 ] [ 5, 6, 7, 8 ]
            //[ 10, 11 ]


        ```
new Array() is used for creating a large empty array of specific size. But has some inconsistent behavior while passing single number value as parameter. new Array(3) will create an array of size 3 with no elements. So it is better to avoid using this.

    ```
        let fruits = new Array("Apple");
        let fibs = new Array(3);
        consol.log(fruits,fibs);
         
         //output
         [ 'Apple' ] [ <3 empty items> ]
    ```

Object.create(Array.prototype) is used to create a plain javascript object that inherits all array methods but is not an actual an array. It creates an Array like Object. This will failed to track length and fail for  Array.isArray() check.

   ```
    let lang = Object.create(Array.prototype);
    lang.push("English");
    lang.push("Hindi");
    lang[2] = "French";  //failed to track length property
    console.log(lang , Array.isArray(lang) , lang.length); 

    //output
    //Array { '0': 'English', '1': 'Hindi', '2': 'French',length: 2 } false 2
   ```

   Array.of() safely creates arrays from arguments of same or different types. It has a consistent behavior. Array.from is useful to convert iterable or array like objects(strings , sets ,maps , nodeLists)  into real arrays.

    ```
      let evenNumbers = Array.of(2);
      evenNumbers[1] = 4;
      let oddNumbers = Array.of(1,3,5);
      console.log(evenNumbers , oddNumbers);

      let alphas = Array.from("ABCDEFGHI");
      let double = Array.from([8,9,10,12], n =>  n*2);
      console.log(alphas,double);

      //output
      //[ 2, 4 ] [ 1, 3, 5 ]
      //[  'A', 'B', 'C',  'D', 'E', 'F',  'G', 'H', 'I'] 
      //[ 16, 18, 20, 24 ]

    ```

## Array Functions and Iteration

   #### Identifying or checking it is an array

   There are multiple ways to check a given variable is array or not
    - instanceOf
    - Object.isPrototypeOf()
    - Array.prototype.isPrototypeOf() 
    
    First two options return true if the prototype is Array.Prototype, but the third option returns true only if it is actually a real array.

        ```
            let realArray = [5];
            let arrayLike = Object.create(Array.prototype);
            console.log(realArray instanceof  Array, Array.prototype.isPrototypeOf(realArray), Array.isArray(realArray));
            console.log(arrayLike  instanceof Array, Array.prototype.isPrototypeOf(arrayLike), Array.isArray(arrayLike));

        ```

  #### Accessing array elements

   we can use array index to access elements of arrays. But the best way to work with array is consider it as stack or queue. Main two methods used to design array as stack is push() and pop() . push() will add elements at the end of the array and pop() remove element from the end. If want to design array as a queue (FIFO) we can use unshift()  and shift(). unnshift() will add a new element at the beginning  of the array shift() remove element from the beginning.

        ```
                let myStack = [];
                myStack.push(10);
                myStack.push(30);
                myStack.push(50);
                console.log(myStack);

                let myQueue = [];
                myQueue.unshift(20);
                myQueue.unshift(30);
                myQueue.unshift(50);
                console.log(myQueue);

                myStack.pop()
                console.log(myStack);
                myQueue.shift();
                console.log(myQueue);

            ````

    Array index starts form 0 . so a[0] , a[1] indicates first two elements of the array 'a'. We can directly retrieve last element by index -1 so a[-1] is the last element. We can also use **at()** method to get element ata specific index. length() ,indexOf(item , fromIndex) , lastIndexOf(item, fromIndex) , findIndex(callback) , findLastIndex(callback)   

        - indexOf(item, fromIndex): Searches from left to right. Returns the first index where the   
            item is found. Returns -1 if missing.

        - lastIndexOf(item, fromIndex): Searches from right to left. Returns the last index where 
            the item is found.

        - findIndex(callback): Returns the index of the first element that passes a conditional test 
            function.

        - findLastIndex(callback): Returns the index of the last element that passes a conditional
            test function.

            ```
                const fruits = ['apple', 'banana', 'orange', 'banana'];

                console.log(fruits.indexOf('banana'));      // 1
                console.log(fruits.lastIndexOf('banana'));  // 3
                console.log(fruits.findIndex(f => f.startsWith('o'))); // 2 (orange)

            ```
     
  #### sort(comparison) , toSort(comparison) , reverse() , toReverse()

        As name implies these methods are used fro sorting and reversing. sort() and reverse() are destructive and change original array . If don't want to change the original arrays we can use toSort() and toReverse() methods

         ```
                const usersData = [
                    { name: 'Chloe', age: 34, joined: '2025-06-15' },
                    { name: 'Alex', age: 22, joined: '2024-11-01' },
                    { name: 'Blake', age: 28, joined: '2026-02-20' }
                ];

                usersData.sort((f,s)=> f.age - s.age);  //ascending
                usersData.sort((f,s) => s.age - f.age); // descending 

                let descendingData = usersData.toSorted((f,s) =>{
                    if(f.name > s.name) return -1;
                    if(f.name < s.name) return 1;
                    return 0;
                })  //Descending

            let sortingwithtie = usersData.toSorted((f,s) =>{
                return (f.age - s.age) || (f.name.localeCompare(s.name));
            });

            console.log(sortingwithtie);
            
            ```
  ### slice(start, end) , splice(start, deleteCount, item1, item2, ...) and toSpliced()

  - Use slice() when you need to copy or extract elements without altering the original array. 

    ```
        const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
        const citrus = fruits.slice(1, 3); 

        console.log(citrus); // Output: ['Banana', 'Cherry']
        console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry', 'Date'] (unchanged)

    ```
  - Use splice() when you want to change the content of an array by deleting old elements and/or inserting new ones.

    ```
        const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
        // Start at index 1, remove 1 element, and add 'Mango'
        const removed = fruits.splice(1, 1, 'Mango');

        console.log(removed); // Output: ['Banana']
        console.log(fruits);  // Output: ['Apple', 'Mango', 'Cherry', 'Date']

    ```
 - toSpliced behaves exactly like splice except it don't change the original array, instead creates and return brand new array.

  ```
    const original = ['A', 'B', 'C', 'D'];
    const modified = original.toSpliced(-3, 2, 'X');
    console.log(original); // Output: ['A', 'B', 'C', 'D'] (Unchanged!)
    console.log(modified); // Output: ['A', 'X', 'D']     (New Array)

  ```
#### Sparse Array

  A sparse array (sometimes called a "holey" array) is an array where the elements are not sequential, leaving gaps or "empty slots" in between indices.
  There are different ways to create a sparse array

   - Deleting an array element
         
        ```    
          delete fruits[3] ;
        ``` 
  - Initializing an array with a length 
    but not filling it

    ```
        let array = [3];
        array[1] = "banana"; 
    ```     
  - Adding to an array at an index 
    greater than its length

    ```
     let fruits = ["apple", "banana”]; 
     fruits[5] = ”cherry"
    ```
#### Iterating Arrays

 for loop 
 for ..in loop
 for ..of loop
 forEach loop

 for ..in loop iterate over indexes , but for..of loop iterate over actual object and also we can get index by using entries(). But these loops doesn't automatically  handle sparse arrays , we have to write the logic.

 forEach()
    - doesn't return a new array
    - can't use break continue or return to stop forEach loop early.
    - It will automatically skips empty slots.


    ```
        for (let [i, v] of fruits.entries()) {
            console.log(`${i} -  ${v}`);
        }
        
        arr = [3,4,5];
        arr[4] = 7;

        arr.forEach((v,i,a)=>{
        a[i] *=v;
        });

    ```


  
 
   