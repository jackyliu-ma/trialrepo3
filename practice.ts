export{};
let message: string = 'welcome back';
console.log(message);

let name: string = 'jacky';
//let sentence : string = 'my name is ${name} I am ts beginner';
let sentence : string = 'my name is '+ name + ' I am ts beginner';

console.log(sentence);

enum color {red, green, yellow};
let c: color = color.yellow;
console.log(c)

let randomvalue: any = 10;
randomvalue = 'jacky';
randomvalue = true;

let multiType: number|boolean;
multiType = 10;
multiType = true;

function add(num1:number, num2:number):number{
    return(num1 + num2)
}
add(5, 10)
console.log(add)

function fullName (person: {firstname:string, lastname:string}){
    console.log('${person.firstname} ${person.lastname}');
}
let p = {
    firstname :'Bruce',
    lastname :'Wayne'
}
fullName(p);
