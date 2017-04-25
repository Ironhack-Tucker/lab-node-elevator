/*jshint esversion: 6 */
const Elevator = require("./elevator.js");
const Person = require("./person.js");

var elevator = new Elevator();
elevator.start();

setTimeout(function(){
  elevator.call(new Person("Paula", 2, 7));
}, 2000);

setTimeout(function(){
  elevator.call(new Person("Carlos", 4, 3));
}, 3000);

setTimeout(function(){
  elevator.call(new Person("Juan", 3, 8));
}, 4000);

setTimeout(function(){
  elevator.call(new Person("Pepe", 0, 9));
  elevator.call(new Person("Manolo", 5, 0));
}, 6000);

setTimeout(function(){
  elevator.call(new Person("Olivia", 10, 0));
}, 9000);

setTimeout(function(){
  elevator.call(new Person("Laura", 0, 6));
}, 8000);
