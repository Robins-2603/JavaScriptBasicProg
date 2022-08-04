let min = 100;
let max = 999;

var num1 = Math.floor(Math.random()*(max-min + 1))+min;
var num2 = Math.floor(Math.random()*(max-min + 1))+min;
var num3 = Math.floor(Math.random()*(max-min + 1))+min;
var num4 = Math.floor(Math.random()*(max-min + 1))+min;
var num5 = Math.floor(Math.random()*(max-min + 1))+min;
console.log("Five three digits random numbers are:- " +num1+" "+num2+" "+num3+" "+num4+" "+num5) ;

min = num1;
if(min>num2) {min=num2}; 
if(min>num3) {min=num3}; 
if(min>num4) {min=num4}; 
if(min>num5) {min=num5}; 
console.log("Min number is: "+ min);

max = num1;
if(max<num2) {max=num2}; 
if(max<num3) {max=num3}; 
if(max<num4) {max=num4}; 
if(max<num5) {max=num5}; 
console.log("Max number is: "+ max);