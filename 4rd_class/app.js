var arr = ["cat","dog","tiger","lion"];
console.log(arr[2])

var arr1 = new Array ("Hassaan","Sharo","Majid");
console.log(arr1);

arr[4] = "elephent";
console.log(arr);


//  intalize; condition; increment/decrement;
for(var i =6; // intalize
    i >9; // condition jase ke agr true hogi to agye block {} of code chale ga nai to false me close krde ga(loop band hoga)
    i++ // increment/decrement
){
    alert("Hello world")
    console.log(++i)
    
}



alert("Hello World!")
alert("Hello World!")
alert("Hello World!")
alert("Hello World!")
alert("Hello World!")


document.write("2" + "X" + "1" + "=" + 2*1 "<br>");
document.write("2" + "X" + "1" + "=" + 2*2);
document.write("2" + "X" + "1" + "=" + 2*3);
document.write("2" + "X" + "1" + "=" + 2*4);
document.write("2" + "X" + "1" + "=" + 2*5);
document.write("2" + "X" + "1" + "=" + 2*6);



for(var i = 1; i <= 10; i++){
    document.write("2" + "X" + i + "=" + 2*i + "<br>")
}


console.log(names[0])
console.log(names[1])
console.log(names[2])


var names = ["Ghous","Basit","fahad"];

for (var i = 0; i < names.length; i++){
    console.log(names[i])
}




var cities = ["Karachi", "Lahore", "Islamabad", "Faislabad"]


for (var i = 0; i < cities.length; i++) {
    if (cities[i] === "Karachi") {
        alert(cities[i] + "  is the cleanest city")
        break
    }
}


for(var i = 0; i > 10; i++){
    if(i === 5){
        break;
    }
    console.log("hello")
}





for(var i = 0; 1 < 5; i++){
    for(var j = 0; j < 3; j++){
        console.log(j + "Pakistan Zindabad")
    }
}


var firstNames = ["Hassaan","Majid","Sharo"]
var lastNames = ["Ali"]

for(var i = 0; i < firstNames.length; i++){
    for (var x = 0; x < lastNames.length; x++){
        console.log(firstNames[i] + " " + lastNames[x])
    }
}





for(var i = 0; i < 10; i++){
    for(var j= 0; j < i; j++){
        document.write("*")
    }
    document.write("<br>")
}






var word = prompt("Enter your word");
var check = "";

for (var i = word.length - 1; i >= 0; i--){
    check += word[i]    
}

if (word === check){
    console.log(word + " is palindrome word")
}else{console.log(word + " is not palindrome word")
}





var name = "Hassaan Farid";


console.log(name.indexOf("a"))



var val1=prompt('enter your first value');
var val2=prompt('enter your second value');
var sign=prompt('enter your operator');

console.log(val1+sign+val2)
if(sign === '+'){
    alert(val1+val2)
}else if(sign === '-'){
    alert(val1-val2)   
}else if(sign === '*'){
    alert(val1*val2)   
}else if(sign === '/'){
    alert(val1/val2)   
}else if(sign === '%'){
    alert(val1/val2*100)   
}


var val1 = parseFloat(prompt('Enter your first value'));
var val2 = parseFloat(prompt('Enter your second value'));
var sign = prompt('Enter your operator (+, -, *, /, %)');

console.log(val1 + " " + sign + " " + val2);

if(sign === '+'){
    alert(val1 + val2);
} else if(sign === '-'){
    alert(val1 - val2);   
} else if(sign === '*'){
    alert(val1 * val2);   
} else if(sign === '/'){
    alert(val1 / val2);   
} else if(sign === '%'){
    alert((val1 / val2) * 100);   // Only if you mean percentage
} else {
    alert('Invalid operator');
}



var equ = prompt('Enter Your equation');
var num = equ.length

for (var i=0; i<num; i++){
    if(equ.slice(i,i+1) === '+'||equ.slice(i,i+1) === '-'||equ.slice(i,i+1) === '*'||equ.slice(i,i+1) === '/'){
        alert('sign has found')
    }
}












