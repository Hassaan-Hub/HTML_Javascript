// function readMore(){
// var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt reiciendis minus amet laboriosam aliquam, innulla accusamus natus ratione dignissimos! Nisi laborum consectetur repellendus iusto quas, sapiente non porroveritatis."
// var text = document.getElementById('text').innerHTML;
//     var text = '<ul><li>list</li><li>more</li><li>readMore</li><li>khatam</li></ul>';
//     var paragraph = document.getElementById('para')
//     paragraph.innerHTML = text
// }



// function big(){
//     var img = document.getElementById('car')
//     img.className += ' hidden'
// }



// function changeImageBefore() {
//     var carImage = document.getElementById('img');
//     carImage.src = 'my.jpg';
// }
// function changeImage() {
//     var img = document.getElementById('img');
//     img.src = 'https://robbreport.com/wp-content/uploads/2024/08/temerario01.jpg?w=800';
// img.className += ' hidden'
// }



// function resizeImage() {
//     var image = document.getElementById('img');
//     image.style.width = '100%';
// }
// function changeImage(element, newSrc) {
//     element.src = newSrc;
// }


var parent = document.getElementById('parent');
var pera = parent.getElementsByTagName('p');

for (var i = 0; i < pera.length; i++) {
    pera[i].style.color = 'blue';
}



