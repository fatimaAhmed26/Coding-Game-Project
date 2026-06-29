/*-------------------------------- Constants --------------------------------*/
const quizData = {
  html: [
    { id: "htmlQ1", question: "What does HTML stand for?", options: ["Hyper Text Makeup Language", "Hyper Text Markup Language", "High Text Markup Language", "Hyper Transfer Markup Language"], answer: "Hyper Text Markup Language" },
    { id: "htmlQ2", question: "Which tag is used to display an image?", options: ["picture", "src", "img", "image"], answer: "img" },
    { id: "htmlQ3", question: "Which attribute is used to specify the language of an HTML document?", options: ["charset", "locale", "lang", "language"], answer: "lang" },
    { id: "htmlQ4", question: "Which input type shows a date picker in the browser?", options: ['type="calendar"', 'type="datetime"', 'type="date"', 'type="picker"'], answer: 'type="date"' },
    { id: "htmlQ5", question: "The attribute that specifies the URL a link points to is ____", options: [], answer: "href" },
    { id: "htmlQ6", question: "To create a clickable button in HTML you use the <____> tag", options: [], answer: "button" }
  ],
  javascript: [
    { id: "jsQ1", question: "Which keyword is used to declare a variable in modern JavaScript?", options: ["var", "let", "dim", "int"], answer: "let" },
    { id: "jsQ2", question: "Which symbol is used for strict equality in JavaScript?", options: ["=", "==", "===", "!=="], answer: "===" },
    { id: "jsQ3", question: "What is the output of typeof undefined?", options: ['"null"', '"object"', '"undefined"', '"void"'], answer: '"undefined"' },
    { id: "jsQ4", question: "To select an HTML element by its ID in JS you use ____", options: [], answer: "document.getElementById()" },
    { id: "jsQ5", question: 'To check if an array includes a certain value you use arr.____("value")', options: [], answer: "includes" },
    { id: "jsQ6", question: "To generate a random number between 0 and 1 you use Math.____() ", options: [], answer: "random" }
  ]
};

/*-------------------------------- Variables --------------------------------*/
let userChoice = ''
let userInput = ''

/*------------------------ Cached Element References ------------------------*/
const container = document.querySelector('#questions-container')
const scoreEl = document.querySelector('#score')

/*-------------------------------- Functions --------------------------------*/
//check the correct answer
function checkAnswer(q, userChoice, answerStatus) {
//   const btn = btn.querySelector('button')
  if (userChoice.textContent === q.answer) {
    answerStatus.textContent = 'correct answer'
    answerStatus.style.color ='green'
    
} else {
    answerStatus.textContent = 'wrong answer'
     answerStatus.style.color ='red'
     
  }
}

//the questions
function Questions() {
  for (let category in quizData) {
    const heading = document.createElement('h2')
    if (category === 'html') {
      heading.textContent = 'HTML Questions'
    } else {
      heading.textContent = 'JavaScript Questions'
    }
    container.appendChild(heading)
    quizData[category].forEach(function(q) {
      const questionDiv = document.createElement('div')
      questionDiv.classList.add('question')
      questionDiv.id = q.id
      const questionText = document.createElement('p')
      questionText.textContent = q.question
      questionDiv.appendChild(questionText)
      const answerStatus = document.createElement('p')
      answerStatus.classList.add('answerStatus')
      answerStatus.textContent = 'answer here'
      questionDiv.appendChild(answerStatus)
      if (q.options.length > 0) {
        q.options.forEach(function(option) {
          const btn = document.createElement('button')
          btn.classList.add('answerMCQ')
          btn.textContent = option
          //call checkAnswer when button is clicked
          btn.addEventListener('click', function() {
            checkAnswer(q, btn, answerStatus)
          })
          questionDiv.appendChild(btn)
        })
      } else {
        const input = document.createElement('input')
        input.type = 'text'
        input.classList.add('answer')
        questionDiv.appendChild(input)
      }
      container.appendChild(questionDiv)
    })
  }
}

/*----------------------------- Event Listeners -----------------------------*/
Questions()