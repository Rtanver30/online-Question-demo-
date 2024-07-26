// javascript file
const quizData = [
  {
    question: "What is your name?",
    Options: [
      "Rohit",
      "Vivek",
      "Anurag",
      "Preetam"
    ],
    correct: 1,
  },
  {
    question: "What is your NSTI name ?",
    Options: [
      "Ramanhtapur Institute of Technology",
      "noida Institute of Technology",
      "vidanagar Institute of Technology",
      "patna Institute of Technology"
    ],
    correct: 0,
  },
  {
    question: "What is your NSTI name ?",
    Options: [
      "Ramanhtapur Institute of Technology",
      "noida Institute of Technology",
      "vidanagar Institute of Technology",
      "patna Institute of Technology"
    ],
    correct: 2,
  },
];

//setp 2: javaScript initialization
const quiz = document.querySelector("#quiz");
const scores = document.querySelector(".score");

const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    "#question, .option_1, .option_2, .option_3, .option_4"
  );
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;


//step 3: javaScript function

const loadQuiz = () => {
  const { question, Options } = quizData[currentQuiz];
  console.log(Options);

  questionElm.innerHTML = `${currentQuiz + 1} : ${question}`;
  // Options.forEach((curOption, index) => (option_1.innerHTML=curOption));
  Options.forEach(
    (curOption, index) => window[`option_${index + 1}`].innerHTML = curOption);
    scores.innerHTML = `Score : ${score}/${quizData.length}`;
};

loadQuiz();

// step 4 get selected Answer function n button click 

const getselectedOption = () => {
  // let ans_index;
  // answerElm.forEach((curOption, index) => {
  //   if(curOption.checked){ans_index = index;}
  // });
  // return ans_index;
  let answerElement = Array.from(answerElm);
  return answerElement.findIndex((curElem) => curElem.checked);

};

//deselect answer
const deselectedAnswer = () => {
  answerElm.forEach((curOption) => (curOption.checked = false));
}

submitBtn.addEventListener('click', () => {
  const selectedOptionIndex = getselectedOption();
  console.log(selectedOptionIndex);


  if (selectedOptionIndex === quizData[currentQuiz].correct) {
    score = score + 1;
  }
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    deselectedAnswer();
    loadQuiz();
  } else {
    quiz.innerHTML = `
    <div class ="result"><h2>You answered correctly at ${score}/${quizData.length} questions</h2>
    <button class="reload-button" onclick="location.reload()">Reload</button></div>`
  }
});