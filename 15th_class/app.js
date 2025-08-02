// var obj = {
//     name: "hassaan"
// }
// console.log(obj.name);

// function Student(name,roll){
//     this.name = name;
//     this.roll = roll
//     // this.school = "saylani"
// }

// Student.prototype.school = "saylani"

// var student1 = new Student("hassaan", 123);
// console.log(student1);


// Student.prototype.getName = function(){
//     return this.name
// }

// Student.prototype.getName = function(){
//     return this.name
// }
// var student1 = new Student("hassaan", 123);
// var student2 = new Student("majid", 321);

// console.log(student1);
// console.log(student2);



// var student1 = {
//     name: "Hassaan",
//     roll: 123,
//     school: 'saylani'
// }
// // console.log("school" in student1);

// for(var key in student2){
//     console.log(key,student2[key]);
    
//     // console.log(student2[key]);      // value
//     // console.log(stud);               // name
// }

// var student2 = {
//     name: "Ali",
//     roll: 321,
//     school: 'saylani'
// }

// console.log(student2);       // pura autha deta hai

// console.log("constructor" in student2);      // prototype ke ander wala

// console.log(student2.hasOwnProperty("constructor"));     // student2 ke ander keye ko dekhta hai




function saveData(){
    var name = document.getElementById("name");
    var roll = document.getElementById("roll");

    var student = {
        name: name.value,
        roll: roll.value
    }
    firebase.database().ref('student').set(student)
}

