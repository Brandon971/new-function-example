//Creating function
function Person(firstName,surname,gender) {
    this.firstName = firstName;
    this.surname = surname;
    this.age = age;
}

let user1 = new Person("Ronaldo","Swinton",19);
let user2 = new Person("messi","mgoqi",19)
console.log(user1 instanceof Person ? "You are a person" : "You are not a person");
