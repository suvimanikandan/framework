"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var circle_1 = require("./circle");
var myShape = new Shape_1.Shape(10, 13);
console.log(myShape.getInfo());
var myCircle = new circle_1.Circle(5, 10, 12);
console.log(myCircle.getInfo());
