// Write the codes in here
// 1. Variable definitions... you know, the things that store values
var age = 20; // Age, can change later, right?
let name = "Adnan"; // Name, can also change, I think
const PI = 3.14; // This is a constant, means it never changes, I guess

console.log("Age:", age); // Print the age to the console, like they say
console.log("Name:", name); // Print the name too, so we can see it
console.log("PI value:", PI); // Print the PI value, we might need it

// 2. Arithmetic and logical operations... you know, the stuff we do with values
let radius = 5; // Radius, I guess
let area = PI * radius * radius; // Area, we calculate it like this, right?
console.log("Area:", area); // Print the area, to make sure

let isAdult = age >= 18; // Is he an adult? We compare age to 18, right?
console.log("Is he an adult?", isAdult); // Print the result, so we can see it

if (isAdult && name === "Adnan") { // If he's an adult and his name is Adnan, you know
  console.log("Adnan is an adult."); // Print this sentence, like they say
}

// 3. Data type conversions... you know, we change the value's type
let ageAsString = age.toString(); // We convert age to a text number, right?
console.log("Age as a string:", ageAsString); // Print age as text, so we can see it

let price = 10.5; // Price, you know
let priceAsString = String(price); // We convert price to text, I think
console.log("Price as a string:", priceAsString); // Print price as text, to make sure

let numberAsString = "123"; // Number as text, you know
let stringAsNumber = parseInt(numberAsString); // We convert the text number to an integer, right?
console.log("String as an integer:", stringAsNumber); // Print the integer, so we can see it
