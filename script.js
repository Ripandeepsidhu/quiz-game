const questions = [
    {
        'que' : 'How many alphabets are there in english language?',
        'a' : '35',
        'b' : '20',
        'c' : '28',
        'd' : '26',
        'correct'  : 'd'
    },
{
    'que' : 'Which of the following is vowel?',
    'a' : 'p',
    'b' : 'a',
    'c' : 'q',
    'd' : 'd',
    'correct'  : 'b'
},
{
    'que' : 'How many vowels are there?',
    'a' : '5',
    'b' : '10',
    'c' : '4',
    'd' : '3',
    'correct'  : 'a'
},
{
    'que' : 'How many consonents are there?',
    'a' : '23',
    'b' : '19',
    'c' : '21',
    'd' : '25',
    'correct'  : 'c'
}
        
]
let index = 0;
let total = questions.length;
let correct = 0;
let wrong = 0;
const queBox = document.getElementById("queBox");
const optionInputs = document.querySelectorAll(".options");
const loadQuestion = () => {
    if (index===total){
        return endQuiz()
    }
    reset();
    const data = questions[index]
queBox.innerText = `${index+1})${data.que}`;
optionInputs[0].nextElementSibling.innerText= data.a;
optionInputs[1].nextElementSibling.innerText= data.b;
optionInputs[2].nextElementSibling.innerText= data.c;
optionInputs[3].nextElementSibling.innerText= data.d;
}
const submitQuiz = () => {
    
    const data = questions[index];
  const ans = getAnswer()
  if(ans === data.correct){
    correct ++;
  }
else {
    wrong ++;
}

index++;
loadQuestion();
return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach((input) => {
        if(input.checked){
            answer= input.value;
        }
    }
    )
    return answer;
}
const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked=false;
        }
    )
}
const endQuiz = () => {
    document.getElementById("container").innerHTML= `<h3> Thank you for playing quiz</h3><h2>${correct}/${total} are correct</h2>`
}
loadQuestion();
