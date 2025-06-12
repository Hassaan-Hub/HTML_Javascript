// for(var a = 0; a<10 ; a++){
//     console.log(a);
// }


// var b = 0;
// while(b<10){
//     console.log(b);
//     b++;
// }



// var c = 0;
// do{
//     console.log(c);
//     c++;
// }
// while(c<10);



// function foo(){
//     var a = 213+42998;
//     alert(a)
// }




// function foo(greet){
//     alert(greet)
// }



// function hay(){
//     alert("Click")
// }



// function getName(){
//     var name = document.getElementById("name");
//     alert(name.value)
// }




// function setName() {
//     var name = document.getElementById('xyz');
//     name.value = "hassaan";

//     var para = document.getElementById("para");
//     para.innerHTML = "Hello this is example";
// }
// window.onload = function() {
//     setName();
// }



function getNumber(num) {
    var result = document.getElementById("result");
    result.value += num;
}

function clearResult(){
    var result = document.getElementById("result");
    result.value = ""
}

function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value)
    
}





