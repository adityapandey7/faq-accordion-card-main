"use strict";
let accordion = document.getElementsByClassName('accordion_queries');
for (let i = 0; i < accordion.length; i++) {

	accordion[i].addEventListener('click', function () {
    let inst=this;
    if(inst.classList.contains('active')){
      inst.classList.remove('active');
    }
    else{
      inst.classList.add('active');
    }

	});
};

// "use strict";
// const allQuestions = document.querySelectorAll(".accordion_queries");
//
//
// allQuestions.forEach(function (mainItem) {
//   mainItem.addEventListener("click", function () {
//     const answerOutput = mainItem.querySelector(".queries_answer");
//     const question = mainItem.querySelector(".queries_question");
//
//     answerOutput.classList.toggle("active");
//     question.classList.toggle("active");
//   });
// });
