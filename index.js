alert("Asalamualekum") 
alert("MADINA PAK is My World") //to view pop up on explorer
console.log("Madina PAK my world") //to view result at nodejs by terminal
document.write("Madina Pak is best") //only for view result on developer side

var age = 45;  //assining variable
var nationality = "Madni";  //assining variable
var iqamafree = true  //assining variable
var a;
a = 67; //to print variable 

alert(nationality); 
console.log(age);
age = 67; //to print variable age with value 67
console.log(age);
console.log(iqamafree);

var isFeepaid = true;
alert(isFeepaid);

var a; // example of undefined variables.
console.log(a);
a = "Hello World";
console.log(a);
a = undefined;
console.log(a);

var a = null; // example of null variables
console.log(a);
a = "Hellow world";
console.log(a);

var age = 34;  //checking the working of "typeof" operator
var name = "Hello";
var isFeepaid = true;
console.log(typeof age);
console.log(typeof name);
console.log(typeof isFeepaid);

var age =prompt("What is your age?" , 45); //example of promt 
console.log(age);
var newAge = age + 5;
console.log(newAge);

var a = 6; //example of using parseInt function
var b = "5"; 
var c = a + parseInt(b) ;
console.log(c);

var a = 6; //example of using parseFloat function
var b = "5.5"; 
var c = a + parseFloat(b) ;
console.log(c);

var a = 6; //example of using parseInt function
var b = "What is your age"; 
var c = a + parseInt(b) ;
console.log(c);

var a = 6; //example of using Number function
var b = prompt("What is your age"); 
var c = a + Number(b) ;
console.log(c);

var a = 5;   //example of comparision operator
var b = 6;

console.log(a == b); 
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

///////

var a = 5;   //example of && operator
var b = 6;
var c = a > b && b < 10;
console.log(c);


var a = 5;  //example of || OR operator
var c = a < 10 || a > 20;
console.log(c);

var a = 60; // Example of Not Operator
var b = a > 100;
var c = !b;
var d = !(a > 100);
var e = !true;
console.log("A = "+a);
console.log("B = "+b);
console.log("C = "+c);
console.log("D = "+d);
console.log("E = "+e);

var a=6;
var b=!a;
var c=!!a;
console.log("A = "+a);
console.log("A = "+b);
console.log("A = "+c);


var score = 40; //example of short - cricuite = #72
var a = score > 50 && score < 70 && score == 66;
console.log(a);



var age = 50; //if condition example

if (age > 60) {
    console.log("In if Age"+age);
}
else {
    console.log("In else Age"+age);
}


var score = 71;  // example of IF condition
if(score > 80){
    console.log("Grade A");
}
else if (score >70){
    console.log("Grade B");
}
else if (score >60){
    console.log("Grade C");
}
else  {
    console.log("Failed");
}



var score = prompt("What is your score");  // example of IF condition
score = parseInt(score);

if(score > 80){
    console.log("Grade A");
}
else if (score >70){
    console.log("Grade B");
}
else if (score >60){
    console.log("Grade C");
}
else  {
    console.log("Failed");
}



var score = 45;   // Example of Nested if

if (score > 80) {
    console.log("Grade A");
    if(score > 90){
        console.log("Rewarded $100");
    }
}
else {
    console.log("Failed");
}

























