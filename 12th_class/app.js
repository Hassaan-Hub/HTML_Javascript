// var list = document.getElementsByTagName("li")

// console.log(list.length);




// var target = document.getElementById("p1");

// console.log(target.attributes[1].nodeName);
// console.log(target.attributes[1].value);




// target.setAttribute('class' , "blue")

// console.log(target.getAttribute("class"));

// var target = document.getElementById("p1");

// if(target.hasAttribute("class")){
//     alert("available")
// }else{
//     ("not available")
// }



// var p = document.createElement('p')
// var text = document.createTextNode("hello hassaan")
// p.setAttribute('class' , "dark")

// p.appendChild(text)
// document.body.appendChild(p);

// var div = document.createElement('div')
// var divText = document.createTextNode("hello ali")

// div.appendChild(divText)
// document.body.appendChild(div)



function addMessage(){
    var val = document.getElementById("val")
    var p = document.createElement("p")
    var textNode = document.createTextNode(val.value)
    p.appendChild(textNode)
    var messages = document.getElementById("messages");
    messages.appendChild(p)

    val.value = ""
}