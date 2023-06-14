// creating a constructor

function Car (make, model){
    this.car = make
    this.model =model
}

// initializing a constructor to a new object

const newCar = new Car("toyota", "corolla")



// prototype is an object shared with all instances

Car.prototype.start = function(){
    console.log(this.model,"  is starting")
}

// console.log(newCar.start())


// inheritance

function electricCar( make, model){
    Car.call(this,make, model)
}

electricCar.prototype = Object.create(Car.prototype)
electricCar.prototype.constructor = electricCar

let  myElectricCar = new electricCar("tesla", "super")

console.log(myElectricCar)