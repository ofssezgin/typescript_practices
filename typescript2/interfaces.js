"use strict";
var add;
var person = (function () {
    function person(n) {
        this.age = 22;
        if (n) {
            this.name = n;
        }
    }
    person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi!');
        }
    };
    return person;
}());
var user1;
user1 = new person();
user1.greet('Hi there, I am');
console.log(user1);
