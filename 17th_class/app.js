// var name1 = "Muhammad"
// function foo(){
//     var name1 = "Hassaan";

// }
// foo()
// console.log(name1);



// if (true){
//     var name1 = "Hassaan"        // output is Hassaan
//     let name1 = "Muhammad"       //  output is name1 is not defined
// }
// console.log(name1);



// for (var i = 0; i <5; i++){
//     let fullname = "Muhammad"       // output is fullname is not defined
// }
// console.log(fullname);



// var lastname = "Muhammad"        //  output is Muhammad
// var lastname = "Ahmed"           //  output is Ahmed

// let lastname = "Muhammad"           //  output is lastname is not defined
// let lastname = "Ahmed"              //  output is lastname is not defined





// var lastname = "Muhammad"        // output is Muhammad lekin sab main alag de ge to warna error ayega 
// var lastname = "Ahmed"           // output is Ahmed 
// var lastname = "Ali"             // output is Ali

// console.log(lastname);



// let lastname;

// lastname = "Hassaan"                // perfectly work

// console.log(lastname);





// const school = "SAYLANI"// ager asko on karen ge toye ayga: Identifier 'school' has already been declared
// const school = "SAYLANI"

// var obj = {
//     schoolName: school
// }

// console.log(obj);




// Template Literals

// document.writeln("2" + "X" + 1 + "=" + 2*1)

// let fisrtName = "Hassaan";
// let lastname = "Kaif";

// console.log(fisrtName + " " + lastname);


// let fisrtName = "Hassaan";
// let lastname = "Kaif";

// firebase.database().ref(`karachi/saylani/webanemobile/${fisrtName}${lastname}`)  // pata nahi kia hai ye

// console.log(`My name is ${fisrtName} ${lastname}`);





//  spread operators 


// var students1 = ["Hassaan", "Majid"]
// var students2 = ["Ali", "Hassan"]
// var merge = students1.concat(students2)     // concat is main part of spread operators

// console.log(merge);


// var students1 = ["Hassaan", "Majid"]
// var students2 = [...students1 , "Ali", "Hassan"]

// console.log(students2);


// var students1 = {name: "hassan"}

// var students2 = {...students1,school: "saylani"}

// console.log(students2);





// Object destructuring


// var students = {
//     name: "Hassaan",
//     school: "saylani",
//     roll: 123
// }
// let {name,school,roll} = students;

// console.log(name);
// console.log(school);
// console.log(Object.keys(students)[0]);
// console.log(students.school);





// Ternary Operators


// var age = 40;                            // as ka asaan tarika niche hai

// if (age > 60){
//     alert("100 se bara hai tu bodde")
// }else if(age < 20){
//     alert("20 se chhota hai")
// }else{
//     alert("you are selected")
// }


// var age = 20;

// var check = 
// age > 30 ?
// "30 se bara hai"
// :
// "30 se chota hai"

// alert(check)


// var age = 220;

// var check = 
// age > 30 && age < 50 ?
// "30 se bara hai"
// :
// "30 se chota hai"

// alert(check)


// var bool = true;
// var name = bool && "Hassaan"

// console.log(name);




// Async or sync

// setTimeout(function(){
//     console.log("Number 1");
// }, 1000);

// console.log("Number 2");

// console.log("Number 3");


// var name1;

// setTimeout(function(){
//     name1 = "Hassaan"
// }, 2000)

// // console.log(name1);             // undefined

// setInterval(function(){
//     console.log(name1);
// }, 1000)




// promise


// var promise = new Promise(function(resolve,reject){
//     var zinger = "Available";
//     if(zinger === "Available"){
//         resolve("Han Basit ne zinger khilaya")
//     }else{
//         reject("Nahi khilaya")
//     }
// })

// promise.then(function(data){
//     console.log("resolve==>",data);
// })
// .catch(function(error){
//     console.log("Error==>",error);
// })

//========================================================================ye nahi work karaha qke firebase link nahi hai
// let promise = new Promise(function (resolve, reject) {
//     firebase.database().ref("users").on("child_added", function (data) {
//         if (data.val()) {
//             resolve(data.val())
//         } else {
//             reject("something went wrong")
//         }
//     })
// })

// function handleSuccess(data) {
//     console.log("Success:", data);
// }

// function handleError(error) {
//     console.log("Error:", error);
// }




var promise = new Promise(function(resolve,reject){
    if(true){
        setTimeout(() =>{
            resolve("it's resolve")
        },1000)
    }else{
        reject("Reject")
    }
})

console.log(promise);

promise.then(function(data){
    console.log("Resolve==>", data);
})

.catch(function(error){
    console.log("Error==>",error);
})

