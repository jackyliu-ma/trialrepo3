"use strict";
exports.__esModule = true;
var message = 'welcome back';
console.log(message);
var name = 'jacky';
//let sentence : string = 'my name is ${name} I am ts beginner';
var sentence = 'my name is ' + name + ' I am ts beginner';
console.log(sentence);
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["yellow"] = 2] = "yellow";
})(color || (color = {}));
;
var c = color.yellow;
console.log(c);
var randomvalue = 10;
randomvalue = 'jacky';
randomvalue = true;
var multiType;
multiType = 10;
multiType = true;
function add(num1, num2) {
    return (num1 + num2);
}
add(5, 10);
console.log(add);
function fullName(person) {
    console.log('${person.firstname} ${person.lastname}');
}
var p = {
    firstname: 'Bruce',
    lastname: 'Wayne'
};
fullName(p);
