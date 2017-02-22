//types
var burger = "hamburger"; //String
var calories = 500; //Numberic
var delicious = true; //Boolean
var digits = [143219876, 112347890]; //Array
var menu = ["Fries", "Burger", "Milkshake"]; //Array
//enum
var Emotion;
(function (Emotion) {
    Emotion[Emotion["Sad"] = -1] = "Sad";
    Emotion[Emotion["Apathetic"] = 0] = "Apathetic";
    Emotion[Emotion["Happy"] = 1] = "Happy";
})(Emotion || (Emotion = {}));
var myFeeling = Emotion.Happy;
console.log(myFeeling);
//tuples
var rufus; // [species, Name, Age]
rufus = ['Canine', 'Rufus', 5];
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
