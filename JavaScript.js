//Data type: number, string, boolean, null, undefined,symbole, object
console.log(2.35)
console.log('JavaScript (codecademy)');

//Arithmetic Operators
console.log(28+3.5);
console.log(2021-1969);
console.log(65/240);

//String Concatenation
console.log('Hello'+' '+'World');

//Properties
console.log('Teaching the world how to code'.length)

//Methods
onsole.log('Codecademy'.toUpperCase());
console.log('    Remove whitespace   '.trim());
console.log ('FFEREESteh'.toLowerCase());

//Built-in Objects
console.log(Math.random()); 

//Variable
var favoriteFood = 'pizza'
console.log(favoriteFood);
let changeMe = true;
changeMe = false;
console.log(changeMe);
const example=apple;
console.log(example);

//Mathematical Assignment Operators
let w = 4;
w += 1;

//The Increment and Decrement Operator
let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++;
lostDollar--;

//String Concatenation with Variables
let favoriteAnimal = "fish"
console.log('My favorite animal: ' + favoriteAnimal);

//String Interpolation
let myName = "Emma"
let myCity = "Kent"
console.log(`My name is ${myName}. My favorite city is ${myCity}`);

//typeof operator
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);

//If Statement
let sale = true;
if (sale){
  console.log('Time to buy!');
}

//If...Else Statements
let sunday = true;
if(true){
  console.log('Join the meeting!')
} else {
  console.log('wait')
  }

  //Comparison Operators:
  //Less than or equal to: <=
  //Greater than or equal to: >=
  //Is equal to: ===
  //Is not equal to: !==

  let hungerLevel = 7;
if (hungerLevel=>7){
  console.log('Time to eat!')
} else {
  console.log('We can eat later!')
}

//Logical Operators:
//the and operator (&&)
//the or operator (||)
let mood = 'sleepy';
let tirednessLevel = 6;
if (mood === 'sleepy' && tirednessLevel > 8){
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}

//Truthy and Falsy
let myVariable = 'I Exist!';
 
if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}

//Ternary Operator
let isLocked = false;
isLocked ? console.log('You will need a key to open the door.'):
console.log('You will not need a key to open the door.');

//The switch keyword
let groceryItem = 'papaya';
 
if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}

//Function Declarations - calling a function
function greetInSpanish(){
    console.log('Buenas Tardes.')
  }
  greetInSpanish();

//Parameters and Arguments
  function sayThanks(name){
    console.log('Thank you for you purchase '+ name + "! We appreciate your business.")
  }
  sayThanks();
  sayThanks('Cole');

//Default Parameters
  function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
  }
  greeting('Nick') // Output: Hello, Nick!
  greeting() // Output: Hello, stranger!

//Return
  function monitorCount(rows, columns){
    return rows*columns;
    }
    numOfMonitors = monitorCount(5,4)
    console.log(numOfMonitors)

// Function Expressions
  const plantNeedsWater = function(day){
    if (day === 'Wednesday'){
      console.log('heloo');
    } else { return false;}
    };
    plantNeedsWater('Wednesday')
    console.log (plantNeedsWater('tuseday'))

//Arrow Functions
 const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };
  console.log(plantNeedsWater('Wednesday'))
  
//Concise Body Arrow Functions
  const plantNeedsWater = day => day === 'Wednesday'? true : false;

//Blocks and Scope - global scope - block scope- scope population

//Arrays
let newYearsResolutions = ['Keep a journal', 'Learn to juggle'];

console.log(newYearsResolutions);

//Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0 rather than 1.

//Update Elements
let seasons = ['Winter', 'Spring', 'Summer', 'Fall']; 
seasons[3] = 'Autumn';
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']

//Arrays with let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
condiments[0]='Mayo'
console.log(condiments);
condiments = [ 'Mayo']
console.log(condiments);
utensils[3]='Spoon'
console.log(utensils)

//The .length property: One of an array’s built-in properties is length and it returns the number of items in the array.
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

//The .push() Method
const itemTracker = ['item 0', 'item 1', 'item 2'];
itemTracker.push('item 3', 'item 4');
console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

//The .pop() Method
const newItemTracker = ['item 0', 'item 1', 'item 2'];
const removed = newItemTracker.pop();
console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

//Arrays and Functions
const flowers = ['peony', 'daffodil', 'marigold'];
 
function addFlower(arr) {
  arr.push('lily');
}
addFlower(flowers);
console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

