"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Cat = exports.Dog = exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function (food) {
        console.log(this.name + "eats" + food);
        return food;
    };
    Animal.prototype.sound = function (sound) {
        console.log("the sound ...");
        return sound;
    };
    return Animal;
}());
exports.Animal = Animal;
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.sound = function (bark) {
        console.log("Dog barks");
        return bark;
    };
    return Dog;
}(Animal));
exports.Dog = Dog;
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.sound = function (meow) {
        console.log("Cat meows");
        return meow;
    };
    return Cat;
}(Animal));
exports.Cat = Cat;
