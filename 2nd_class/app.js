var a = +prompt("Enter value","");
var b = a + 10;
console.log("The output is", + " " + b) 




var x = "Enter value";
var y = "your value is:"
var a = +prompt(x,y);
var b = a + 10;
document.write("The output is", + " " + b)






var age = 17;
if(age > 16){
    alert("your age is less")
}
else{
    alert("you are no more with less age")
}







var age = +prompt("Enter your age");
if(age == 14){
    alert("your age is equal")
}
else if(age < 14){
    alert("your age is less")
}
else{
    alert("you are no more with less age")
}





var age = +prompt("Enter your age");
var gender = prompt("Enter your Gender")
if (age > 18 || gender == "male"){
    alert("you are allowed to ride")
}
else{
    alert("you are not allowed")
}




var a = "6";
if(a < 5){
    alert("True")
}
else{
    alert("False")
}





var x = 5;
var y = 10;
var a = 50;
var b = 35;
if(x+y === a-b){
    alert("correct")
}
else{
    alert("incorrect")
}








var percent = +prompt("Enter your percentage")
if(percent >= 80 && percent <= 100){
    alert("A+")
}
else if(percent >= 60 && percent <= 80){
    alert("A")
}
else if(percent >= 50 && percent <= 60){
    alert("C")
}
else if(percent >= 40 && percent <= 50){
    alert("D")
}
else if(percent >= 33 && percent <= 40){
    alert("E")
}
else if(percent >= 0 && percent <= 33){
    alert("F")
}
else{
    alert("you did not write correct percentage")
}







var names = "hassaan"
var names1 = "majid"
var names2 = "sharo"

var students = ["hassaan","majid","sharo"]

alert("welcome: " + students[0])



console.log(students[0]);











var names = [];


names[0] = "hassaan";
names[1] = "majid";

console.log(names);







students.pop()                           //pop remove end value

students.push("kaif","naseer")           //push value to end

students.shift()                         //shift remove element from start

students.unshift("kaif","naseer")        //unshift add element at start

students.splice(1,2)


var students = ["hassaan","majid","sharo","kaif","naseer"]

var copystudents = students.slice(1,3)

console.log(students);

console.log(copystudents)
