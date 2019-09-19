var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = "9"; // turned 9 into a string with quotations

function sayHello(name: string){
   return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello("9")); // same thing as the one above

function fullName(firstName: string, lastName: string, middleName = "", ){ //set variable middlename to a default value.
   let fullName = `${firstName} ${middleName} ${lastName}`;
   return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones"));

interface Student {
   firstName: string;
   lastName: string;
   belts: number;
}
function graduate(ninja: Student){
   return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
   firstName: "Christine",
   lastName: "Yang",
   belts: 2
}
const jay = {
   firstName: "Jay",
   lastName: "Patel",
   belts: 4 //spelling error
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));

class Ninja {
   fullName: string;
   constructor(
      public firstName?: string, //made parameters optional
      public lastName?: string){
         this.fullName = `${firstName} ${lastName}`;
      }
   debug(){
      console.log("Console.log() is my friend.")
   }
}
// This is not making an instance of Ninja, for some reason: // no parameters passed.
const shane = new Ninja();
// Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = new Ninja('Alan', 'Turing') // changed format to match class Ninja
 
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja){
   return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems: // no more problems
console.log(study(turing));
console.log(study(shane)) // results in undefined because no paramters were passed

var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => x * x;
// This is not showing me what I want: // removed curly brackets
console.log(square(4));
// This is not working:
var multiply = (x,y)=> x * y; //placed parenthesis around variable declaration
console.log(multiply(3,4))
// Nor is this working:
var math = (x, y) => {
   let sum = x + y;
   let product = x * y;
   let difference = Math.abs(x-y);
   return [sum, product, difference]; // placed logic inside a code block with {}
}
console.log(math(1,2))

class Elephant {
   constructor(public age: number){}
   birthday = () => { //added a arrow function
      this.age++;
   }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
   }, 2000)
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.