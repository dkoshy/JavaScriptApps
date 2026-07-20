

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