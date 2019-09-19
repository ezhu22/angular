class Bike {
    price: number;
    max_speed: number;
    miles: number;
constructor(price: number, max_speed: number, miles = 0){
    this.price = price;
    this.max_speed = max_speed;
    this.miles = miles;
}
displayInfo(){
    console.log(`This bike is worth ${this.price} dollars, has a max speed of ${this.max_speed} mph and currently has ${this.miles} miles.`)
}
ride(){
    console.log('Riding!')
    this.miles += 10
    return this
}
reverse(){
    if(this.miles == 0){
        console.log(`You are at ${this.miles} and cannot reverse any mileage.`);
        return this;
    }
    else{
        console.log('Reversing!')
        if(this.miles - 5 < 0){
            console.log('Reversing!')
            this.miles = 0;
            console.log(`You have reversed your mileage to: ${this.miles}, you will not be able to reverse any more until you ride more miles.`);
            return this;
        }
        else{
            this.miles -= 5
            console.log(`You have reversed your mileage to ${this.miles}.`)
            return this;
        }
        
    }
}
}

const racer = new Bike(10000, 200)
const chopper = new Bike(5000, 120)
const street = new Bike(100, 60)

racer.ride().ride().ride().reverse().displayInfo()
chopper.ride().ride().reverse().reverse().displayInfo()
street.reverse().reverse().reverse().displayInfo()