var wedCourse = {
    t1 : "hassaan",
    t2 : "farid",
    t3 : "ali"
}
console.log(wedCourse);

var arr = ["Hassaan", "Farid", "Ali"];
console.log(arr);

wedCourse.t4 = "Ahmed"
console.log(wedCourse);

wedCourse.class = [18,19];
console.log(wedCourse);

var course = {};
course.name = "WEB"
"WEB"
console.log(course);


wedCourse.t5 = undefined
console.log(wedCourse);

var abc = "t4" in wedCourse;

console.log(abc);

var myQuestions = [
    {
        question : "what is your name",
        answer : {
            a : "Hassaan",
            b : "Ali",
            c : "Farid"
        },
        correctAnswer : "c"
    },
    {
        question : "what is your age",
        answer : {
            a : "15",
            b : "12",
            c : "16"
        },
        correctAnswer : "b"
    },
]