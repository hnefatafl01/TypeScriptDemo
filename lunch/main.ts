//types
var burger: string = "hamburger"; //String
var calories: number = 500;       //Numberic
var delicious: boolean = true;    //Boolean

const digits : Array<number> = [143219876, 112347890]; //Array
const menu : string[] = ["Fries", "Burger", "Milkshake"]; //Array

//enum
enum Emotion {
  Sad = -1,
  Apathetic,
  Happy
}

var myFeeling = Emotion.Happy;
console.log(myFeeling);


//tuples
let rufus : [string, string, number];// [species, Name, Age]
rufus = ['Canine','Rufus', 5];


//improper type
// calories = "five-hundred";

//function is void because no return value
// function speak(food: string, energy: number): void {
//   console.log("Our " + food + " has " + energy + " calories.");
// }

//returns and manipulates DOM
// function speak(food: string, energy: number) {
//   return "Our " + food + " has " + energy + " calories.";
// }


//using and interface to check data structure


// document.body.innerHTML = speak(burger, calories);
