//Arrow function part 1
/*
//ES5

const years = [2020, 1989, 1967, 1879];
var ages5 = years.map(function(el){
    return 2048 -el;
});
//console.log(ages5);

//ES6
// 1 argument 1 line of code in the return statement
let ages6 = years.map(el => 2040 - el);
console.log(ages6);

// 2 arguments 1 line of code in the return statement
//logging using template literals
ages6 = years.map((el, index) => `Element at index ${index + 1} is aged ${2030 - el}.`);
console.log(ages6);

// 2 arguments multiple lines of code in the return statement
ages6 = years.map((el, index, arr) => {
    const finalYear = 2048;
    let now = new Date().getFullYear();
    return `Element at position ${index +1} as at ${now} will expire in ${finalYear - el}`;
});
console.log(ages6);*/
//Arrow functions do not have their own this 
//refer to ES6 notes
//ES5
/*var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This box on position ' + this.position + ' is ' + this.color + ' in color' ;
            alert(str);
        });    
    }
}
box5.clickMe();*/

//ES5 = self OR that work-around
/*var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This box on position ' + self.position + ' is ' + self.color + ' in color' ;
            alert(str);
        });    
    }
}
box5.clickMe();*/

//ES6
/*
var box6 = {
    color: 'GREEN',
    position: 1,
    clickMe: function(){
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This box on position ' + this.position + ' is ' + this.color + ' in color' ;
            alert(str);
        });    
    }
}
box6.clickMe();*/

//Function Constructor
/*
function Person(name){
    this.name = name;
}

Person.prototype.myFriends = function(friends){
    var arr = friends.map(el =>  `${this.name} is a friend to ${el} `);
    console.log(arr);
}
let shamwari = ['Vijay', 'Vien'];
new Person('Mike').myFriends(shamwari);*/

//destructuring in ES6
/*
//destructuring an array
var [person1, person2, person3] = ['Angella','Mirriam','Hope'];
//console.log(person1);
//console.log(person2);
//console.log(person3);

//destructing an object
var obj = {
    placeA: 'Murewa',
    placeB: 'Gutu',
    placeC: 'Mutare'
}

const {placeA:a, placeB: b, placeC: c} = obj;
console.log(a);
console.log(b);
console.log(c);

function calcAgeRetirement(yearOfBirth){
    let age = new Date().getFullYear() - yearOfBirth;
    return [age, 65 - age];
}
const [zera, yearsToRetirement] = calcAgeRetirement(1989);
console.log(zera);
console.log(yearsToRetirement);

//console.log() */

//Arrays methods in ES6
/* const salaries = [20, 16, 34, 45, 67, 80];
var result = salaries.findIndex(function(el){
    return el > 50;    
});
console.log(result); */

//ES6 array methods: findIndex, find & filter
/*
const salaries = [20, 16, 34, 45, 67, 80];
var result = salaries.filter(el => el > 50); //returning the first one 67, 80 is not returned.
console.log(result);*/

//arguments variable
/*
function isFullAge1(){
    console.log(arguments);
}
isFullAge1(1, 34, 56, 'john');*/


/*function MunangaPerson(firstName, lastName, yearOfBirth, nationality){
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var angella = new MunangaPerson('angella',1989);
console.log(angella); */
 
//MAPS
/*
var question = new Map();
question.set('question', 'Who is the best healer');
question.set(1, 'Jesus');
question.set(2, 'Him only');
question.set(3, 'Jehova Healer');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'There is no false answer'); */
//console.log(question);
//console.log(question.get(3));
//using forEach to iterate thru a map
//question.forEach((cur, key) => console.log(`Key ${key} has the corresponding value of ${cur}`));

//using for -of to iterate
/*for(let entries of question){
    console.log(entries);
}*/
/*
for(let [key, val] of question.entries()) {
    //destructuring a map
    //console.log(key);
    //console.log(val);
    if(typeof(key)==='number')
       {
       console.log(`Answer: ${key} ${val}`);
       }
}
let ans = parseInt(prompt('Which one is correct?'));
console.log(question.get(ans===(question.get('correct'))));
*/

//Coding challenge 8
class TownElement {
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
    
    
}
//3 parks: Green Park, National park & Oak Park

class Park extends TownElement {
    constructor(name, buildYear, numOfTrees, parkArea){
        super(name, buildYear);
        this.numOfTrees = numOfTrees;
        this.parkArea = parkArea;
    }
    
    parkTreeDensity(){
        console.log(`The tree density for ${this.name} is ${this.numOfTrees / this.parkArea} trees per square kilometre.`);
    }
    
}
const allParks = [new Park('Green Park', 1980, 2000, 250),
                 new Park('National Park', 1990, 250, 35),
                 new Park('Oak Park', 2000, 300, 45)];
/*
//retrieving a park with more than 1000 trees
let treesPerPark = new Map();
treesPerPark.set('Green Park', 2000);
treesPerPark.set('National Park', 250);
treesPerPark.set('Oak Park', 300);

for([key, value] of treesPerPark.entries()){
    if(value >= 1000){
        console.log(`${key} has more than a 1000 trees`);
    }
}
*/


//4 street: 1st, 2nd, 3rd & 4th
class Street extends TownElement {
    constructor(name, buildYear, length, size =3){
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    
    determineSize(){
        const classification = new Map();
        classification.set(1, 'tiny street');
        classification.set(2, 'small street');
        classification.set(3, 'normal strret');
        classification.set(4, 'big street');
        classification.set(5, 'huge street');
        console.log(`${this.name}, build in ${this.buildYear} is a ${classification.get(this.size)}`);
    }
}
const allStreets = [new Street('Fisrt St',1500, 210, 1),
                   new Street('2nd St',1600, 410),
                   new Street('3rd St',1700, 810, 4),
                   new Street('4th St',1800, 2780, 5)];

function total_AvgCalc(arr){
    let sum = arr.reduce(function(prevEl, curEl, index){
        return prevEl + curEl;
    });
    
    return [sum, sum / arr.length];
}

function parkReport(p){ //p being an array of all our parks
    console.log(`---------------PARKS REPORT----------------`);
    //lopping thru our allParks array, then calling the parkTreeDensity on each element
    //console.log(p);
    p.forEach(el => el.parkTreeDensity());
    
    //avg age for all parks
    //create an external function which is going to calculate the average and the total for any array that we input into that function.
    //create an array with each park's age that we will pass to total_AvgCalc
    let ages = p.map(el => new Date().getFullYear() - el.buildYear);
    console.log(`ages array ${ages}`);
    const[totalAge, avgAge] = total_AvgCalc(ages);
    console.log(`The average age of our ${p.length} parks is ${avgAge}`);
    
    //the name of the park that has more than 1,000 trees
    //first create an array containing each park's num of trees, then findIndex on this array where numofTrees > 1000
    const i = p.map(el => el.numOfTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees`);
    
    
}

function streetReport(s){
    console.log(`---------------STREETS REPORT----------------`);
    //total and average length of the town's streets
    //create an array with 4 streets' length
    const lenArr = s.map(el => el.length);
    const [tot, avg] = total_AvgCalc(lenArr);
    console.log(`The total length of our ${s.length} streets is ${tot} kms; whereas the average is ${avg}`);
    
    //classification
    s.forEach(el => el.determineSize());
}

parkReport(allParks);
streetReport(allStreets);
































































