var questions = [
    {
        question: "HTML stands for",
        option1: "Hyper Text markup language",
        option2: "Hyper Link markup language",
        option3: "Hyper Text makeup language",
        correctAns: "Hyper Text markup language"
    },
    {
        question: "CSS stands for",
        option1: "Cascading Style sheet",
        option2: "Cascading Styling sheet",
        option3: "Cascading super sheet",
        correctAns: "Cascading Style sheet"
    }, {
        question: "In how many ways can CSS be written in?",
        option1: "1",
        option2: "2",
        option3: "3",
        correctAns: "3"
    }, {
        question: "Which tag gives your the largest heading in html",
        option1: "&lth6&gt",
        option2: "&lth2&gt",
        option3: "&lth1&gt",
        correctAns: "&lth1&gt"
    }, {
        question: "how many data types in js?",
        option1: "6",
        option2: "7",
        option3: "8",
        correctAns: "8"
    }
    , {
        question: "how many days in febuary",
        option1: "30",
        option2: "28",
        option3: "29",
        correctAns: "28"
    }];


var ques = document.getElementById("q");

var o1 = document.getElementById("r1");
var o2 = document.getElementById("r2");
var o3 = document.getElementById("r3");

var btn = document.getElementById("btn")


var timer = document.getElementById("timr")

var sec = 59;
var min = 1;
var score = 0;


setInterval(function () {

    timer.innerHTML = '${min} : ${sec}';
    sec--;

    if (sec < 0) {
        min--;
        sec = 59
    }


    if (min < 0) {

        min = 1
    }




}, 1000)


var i = 0;


function disques() {




    // for (var x = 0; x < getoption.length; x++) {




    //     // if (getoption[x].Checked) {

    //     //     var selecval = getoption[x].Value;
    //     //     var selques = questions[index - 1]["question"];
    //     //     var selans = questions[index - 1]["option${selecval}"];

    //     //     var corans = questions[index - 1]["correctAns"];

    //     //     if (selans == corans) {

    //     //         alert(" (${score}/question.length)*100 ")


    //     //     }

    //     // }


    // }

    ques.innerHTML = questions[i].question
    o1.innerHTML = questions[i].option1
    o2.innerHTML = questions[i].option2
    o3.innerHTML = questions[i].option3



    i++


}


function clickd() {


    btn.disabled = false

}