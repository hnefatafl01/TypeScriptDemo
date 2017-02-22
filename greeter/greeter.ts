class Dog {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Dog {
  firstName: string;
  lastName: string;
}

function greeter(dog: string) {
  return "Hello, " + dog.fullName;
}

// var dog = {
//   firstName: "Rufus",
//   middleInitial: "D.",
//   lastName: "Dog"
// };


var dog = new Dog("Rufus", "D.", "Dog");

document.body.innerHTML = greeter(dog);
