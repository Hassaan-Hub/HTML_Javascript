// for (var a = 1; a <= 100; a = a + 10) {
//     for (var b = a; b <= a + 9; b++) {
//         document.write(b + " ");
//     }
//     document.write("<br>")
// }



// var city = prompt('Enter your city Name')
// var firstchar = city.slice(0,1);
// var otherchar =city.slice(1)
// firstchar = firstchar.toUpperCase()
// otherchar = otherchar.toLowerCase()

// var city = firstchar + otherchar;
// console.log(city)

// var arr = ['karachi', 'Islamabad','Pishawar']
// for (var i=0; i<arr.length; i++){
//     if(arr[i] === city){
//         alert('City Has Found')
//     }else(alert('City not Found'))
// }





// var country = prompt('Enter your country')
// var firstchar = country.slice(0,1);
// var otherchar =country.slice(1)
// firstchar = firstchar.toUpperCase()
// otherchar = otherchar.toLowerCase()
// var city = firstchar + otherchar;
// console.log(country)



// var country = "pAkIStan"
// var firstchar = country.slice(0,1);
// // console.log(firstchar)
// firstchar = firstchar.toUpperCase()
// // console.log(firstchar)


// var otherchar =country.slice(1)
// otherchar = otherchar.toLowerCase()
// // console.log(otherchar)
// var city = firstchar + otherchar;
// console.log(city)


// // firstchar = firstchar.toUpperCase()
// // console.log(firstchar)
// // console.log(country)
// // alert(city)



// var arr = ['Pakistan','India','Turkey']
// for (var i =0; i<arr.length; i++) {
//     if (arr[i] === country) {
//         alert('country has found')
//     }else{alert('country has not found')}
// }







// var str = prompt("Enter some text");
// var numchars = str.length;
// for (var i = 0; i<numchars; i++){
//     if (str.slice(i, i + 2) === "  "){
//         alert("double spaces are found!");
//     }
// }






// var text = "origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: chrome, c ";
// var indexNum = text.indexOf("blocked by CORS policy:");
// var firsttext = text.slice(0,indexNum)
// var replacingtext = 'protocol schemes:';
// var thirdtext = text.slice(indexNum+12)
// console.log(firsttext + replacingtext + thirdtext)




// var text = "origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: chrome, c ";
// var indexNum = text.lastIndexOf("new");
// var firsttext = text.slice(0,indexNum)
// var replacingtext = 'protocol schemes:';
// var thirdtext = text.slice(indexNum+12)
// console.log(firsttext + replacingtext + thirdtext)





// var a = "Hassaan";
// console.log(a.charAt(6))




// var para = "this is example";
// var para1 = para.replace("example","text");
// console.log(para1)






// var para = "this is example , this is example , this is example , this is example";
// var para1 = para.replace(/example/g,"text");
// console.log(para1)





// var num = 1.2;
// var round = Math.round(num)
// console.log(round);



// var num = 1.2;
// var round = Math.ceil(num)
// console.log(round);



// var num = 1.6;
// var round = Math.floor(num)
// console.log(round);

// Math.random()
// console.log(round);








// var headsuser = prompt("enter heads username");
// var tailsuser = prompt("enter tails username");

// var toss = Math.random() * 2;

// var floor = Math.floor(toss)
// if (floor === 0){
//     alert("Heads " + headsuser + " win the toss")
// }else{
//     alert("tails " + tailsuser + " win the toss")
// }



// Number("10")
// console.log(Number);


// var num = 10;
// console.log(num);


// var num = 10.5454545454;
// var cont = num.toFixed(2)
// console.log(cont);














