for (var a = 1; a <= 100; a = a + 10) {
    for (var b = a; b <= a + 9; b++) {
        document.write(b + " ");
    }
    document.write("<br>")
}



var city = prompt('Enter your city Name')
var firstchar = city.slice(0,1);
var otherchar =city.slice(1)
firstchar = firstchar.toUpperCase()
otherchar = otherchar.toLowerCase()

var city = firstchar + otherchar;
console.log(city)

var arr = ['karachi', 'Islamabad','Pishawar']
for (var i=0; i<arr.length; i++){
    if(arr[i] === city){
        alert('City Has Found')
    }else(alert('City not Found'))
}





var country = prompt('Enter your country')
var firstchar = country.slice(0,1);
var otherchar =country.slice(1)
firstchar = firstchar.toUpperCase()
otherchar = otherchar.toLowerCase()
var city = firstchar + otherchar;
console.log(country)
var arr = ['Pakistan','India','Turkey']
for (var i =0; i<arr.length; i++) {
    if (arr[i] === country) {
        alert('country has found')
    }else{alert('country has not found')}
}







var str = prompt("Enter some text");
var numchars = str.length;
for (var i = 0; i<numchars; i++){
    if (str.slice(i, i + 2) === "  "){
        alert("double spaces are found!");
    }
}






var text = "origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: chrome, chrome-extension, ";
var indexNum = text.indexOf("chrome")
console.log(indexNum)