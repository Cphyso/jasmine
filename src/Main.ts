import { Cat } from './Animal';
import { Dog } from './Animal';
import { Home } from './Home'

let cat = new Cat("Stormy");
cat.eat("Food")
cat.sound("Meows")

console.log("-------------------")

let dog = new Dog("Rax")
dog.eat("Food")
dog.sound("Barks")

var home = new Home();
var dog1 = new Dog("Rax");


home.makeAllSound();
home.adoptPet(dog1);
home.makeAllSound();