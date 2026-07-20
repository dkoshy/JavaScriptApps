this.name = "Deepak Koshy";

const Boom = function(name){
    //"use strict";
    this.name = "Deepak";
    this.gender = "M";
 console.log(1, this);
}

Boom();
let b = new Boom();

global.name = "Kumar";

//this with static

class Helicopter
{
    constructor(speed)
    {
        this.speed;
    }
    static speedControl()
    {
      if(this.speed > 500)
          this.speed = 450;
        console.log(2,this, this.speed);
    }
}

let h1 = new Helicopter(550);
Helicopter.speedControl();

//arrow function
profile = {
    tenetName: "Pepsi",
    profit: 90040505,
    print : ()=>{
        console.log(3,this); //arrow function is behaving differently.
    },
    printAgain : function(){
        console.log(3,this)
    }
}
profile.print();
profile.printAgain();

//arrow a subfunction
let display;
(function(){

display = ()=>{
    console.log(4,this);
}

})();

display();

console.log(5, this , module.exports === this);

//bind() call() and apply()

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
