const quizDB = [
  {
    question: "Q1. What is the basic unit of information in computing?",
    a: "Bit",
    b: "Byte",
    c: "Megabyte",
    d: "Gigabyte",
    ans: "ans1",
  },
  {
    question:
      "Q2. Which component is responsible for performing arithmetic operations in a computer?",
    a: "CPU",
    b: "GPU",
    c: "RAM",
    d: "Hard Drive",
    ans: "ans1",
  },
  {
    question: "Q3. What does RAM stand for in computing?",
    a: "Random Authorization Module",
    b: "Read-Only Memory",
    c: "Random Access Memory",
    d: "Repetitive Action Module",
    ans: "ans3",
  },
  {
    question: "Q4. What is the purpose of an operating system?",
    a: "Write code",
    b: "Play games",
    c: "Manage hardware resources",
    d: "Display advertisements",
    ans: "ans3",
  },
  {
    question:
      "Q5. Which programming language is considered a low-level language?",
    a: "Java",
    b: "Python",
    c: "C",
    d: "Assembly",
    ans: "ans4",
  },
  {
    question: "Q6. What does HTML stand for?",
    a: "Hyperlink Text Markup Language",
    b: "Hypertext Transfer Protocol",
    c: "Hypertext Markup Language",
    d: "Home Tool Markup Language",
    ans: "ans3",
  },
  {
    question: "Q7. Which computer port is used to connect to the internet?",
    a: "USB",
    b: "Ethernet",
    c: "HDMI",
    d: "VGA",
    ans: "ans2",
  },
  {
    question: "Q8. What is the role of a compiler in programming?",
    a: "Execute code",
    b: "Debug code",
    c: "Store data",
    d: "Translate code to machine language",
    ans: "ans4",
  },
  {
    question: "Q9. What is the main function of an input device?",
    a: "Enter data into the computer",
    b: "Display output",
    c: "Store data",
    d: "Provide power to the computer",
    ans: "ans1",
  },
  {
    question: "Q10. What is the purpose of a firewall?",
    a: "Enhance graphics",
    b: "Block unauthorized access",
    c: "Generate reports",
    d: "Improve computer performance",
    ans: "ans2",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  let questionList = quizDB[questionCount];

  question.innerHTML = questionList.question;

  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;
};
loadQuestion();

const getCheckedAnswers = () => {
  let answer;

  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

const deselectAll = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};

submit.addEventListener("click", () => {
  let checkedAnswers = getCheckedAnswers();

  if (!checkedAnswers) {
    alert("Please select an option first 😊😊");
    return;
  }

  if (checkedAnswers === quizDB[questionCount].ans) {
    score++;
  }
  questionCount++;
  deselectAll();
  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
          <h3>You Scored ${score} out of ${quizDB.length} 😍</h3>
          <button class="btn" onclick="location.reload()">Play Again</button>
      `;

    showScore.classList.remove("scoreArea");
  }
});
