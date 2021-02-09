"use strict";
exports.__esModule = true;
exports.Home = void 0;
var Home = /** @class */ (function () {
    function Home() {
        this.pets = [];
    }
    Home.prototype.adoptPet = function (pet) {
        if ((this.pets.indexOf(pet) < 0)) {
            this.pets.push(pet);
        }
        else {
            throw new Error("PET ALREADY EXISTS");
        }
    };
    Home.prototype.makeAllSound = function () {
        for (var _i = 0, _a = this.pets; _i < _a.length; _i++) {
            var pet = _a[_i];
            pet.sound("sound");
        }
    };
    return Home;
}());
exports.Home = Home;
