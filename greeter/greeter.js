var Dog = (function () {
    function Dog(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Dog;
}());
function greeter(dog) {
    return "Hello, " + dog.fullName;
}
// var dog = {
//   firstName: "Rufus",
//   middleInitial: "D.",
//   lastName: "Dog"
// };
var dog = new Dog("Rufus", "D.", "Dog");
document.body.innerHTML = greeter(dog);
