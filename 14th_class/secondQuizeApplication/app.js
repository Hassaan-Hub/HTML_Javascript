window.onload = function(){
    show(0)
}
var questions = [{
    id: 1,
    question: "who is the inventer of JavaScript ?",
    answer: "Brendan Eich",
    options: [
        "Dennis Ritchie",
        "Brendan Eich",
        "James Gosling",
        "Guido van Rossum"
    ]
},

{
    id: 2,
    question: "who is the inventer of Apple ?",
    answer: "Steve Jobs",
    options: [
        "Dennis Ritchie",
        "Steve Jobs",
        "James Gosling",
        "Guido van Rossum"
    ]
},

{
    id: 3,
    question: "who is the founder of Google ?",
    answer: "Larry Page",
    options: [
        "Dennis Ritchie",
        "Steve Jobs",
        "Larry Page",
        "Guido van Rossum"

    ]
},

{
    id: 4,
    question: "who is the inventer of Sammsung ?",
    answer: "Lee Byung-chul",
    options: [
        "Dennis Ritchie",
        "Steve jobs",
        "Larry Page",
        "Lee Byung-chul"
    ]

}

]

function next(){
    question_count++;
    if (question_count < questions.length) {
        show(question_count);
    } else {
        alert("Quiz completed!");
        // Optionally reset or show score
    }
}


function show(e){
    var ques = document.getElementById("question")
    ques.innerHTML = `<h1> ${questions[e].question} </h1>
    <ul class="list">
        <li class="option">${questions[e].options[0]}</li>
        <li class="option">${questions[e].options[1]}</li>
        <li class="option">${questions[e].options[2]}</li>
        <li class="option">${questions[e].options[3]}</li>
    </ul>`

    active(); // ✅ Call here
}

function active() {
    var option1 = document.querySelectorAll("li.option");

    for (var i = 0; i < option1.length; i++) {
        option1[i].onclick = function () {
            // Remove previous active class (optional if only one allowed)
            for (var j = 0; j < option1.length; j++) {
                option1[j].classList.remove("active");
            }

            // Add active class to clicked item
            this.classList.add("active");
        }
    }
}
