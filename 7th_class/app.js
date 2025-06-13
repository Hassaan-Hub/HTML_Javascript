// var a = new Date();
// console.log(a);

// console.log(a.toString());



// var b = a.slice(0,3);  this is wrong value
// console.log(a);

// var b = a.toString();
// var c = b.slice(0,3);
// console.log(c)



// var daynames = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
// var now = new Date();
// var theday = now.getDay();
// var nameOfToday = daynames[theday]
// console.log(nameOfToday)



// var a = new Date();
// console.log(a.getHours());


// console.log(a.getFullYear());

// console.log(a.getMonth());




// var dob = new Date("Nov 18, 2007")
// var dobmili= dob.getTime();
// var today = new Date();
// var todarmili = today.getTime()
// var diff = todarmili - dobmili;
// var diffyear = diff/(1000*60*60*12*24*30)
// var accuage = Math.floor(diffyear)
// console.log(dobmili);
// console.log(accuage);




// var dob = new Date(prompt("Enter your date of birth","jan 1, 1970"))
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - dobmili;
// var accuage = Math.floor(diff/(1000*60*60*30*12*24));
// document.write(accuage);




// function add(a,b,c){
//     // alert(a*b*c)
//     var f = 15;
//     var z = a+b+c
//     return z;
// }

// var g = add(4,3,3);
// // alert(g);
// alert(g);


// function ageclac(){
//     var dob = new Date(prompt("Enter your date of birth","Jan 1, 1970"));
//     var dobmili = dob.getTime();
//     var today = new Date();
//     var todaymili = today.getTime();
//     var diff = todaymili - dobmili;
//     var accuage = Math.floor(diff/(1000*60*60*12*24*30))
//     document.write(accuage);
// }
// ageclac();


// console.log("Hello")

// function Has(b,a){
//     return "Hello"
// }
// console.log(Has(6,6));

//  arguments
// console.log(Has(2,6))   //  8
// console.log(Has(2,3))   //  5
// console.log(Has(12,8))  //  20

// Has(87,98);




// var a = "ghous"

// function vivo(){
//     a = "hassaan";
// }
// vivo();
// console.log(a);




// function calc(num1,opr,num2){
//     if(opr === "+"){
//         return num1 + num2
//     }
//     else if (opr === "-"){
//         return num1 - num2
//     }
//     else if(opr === "*"){
//         return num1 * num2
//     }else{
//         return "Incorrect Operator!"
//     }
// }

// var result = calc(5,"-",4);
// var result1 = calc(5,"*",4);
// var result2 = calc(5,"/",4);

// console.log(result)
// console.log(result1)
// console.log(result2)





// function foo(a,b = 3){
//     return a + b
// }

// console.log(foo(1,8));




switch (name){
    case "HASSAAN":
        alert("Hello Hasaan")
    case "Majid":
        alert("Hello Majid")
    default:
        alert("Hello!")
}

alert("HASSAAN");
alert("Majid")






















