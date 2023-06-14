let Questions = [
    {
        'que': "Which of the following is a markup language?",
        'a': "HTML",
        'b': "CSS",
        'c': "Javascript",
        'd': "PHP",
        'correct': 'a'
    },
    {
        'que': "In which year Javascript was launched?",
        'a': "1996",
        'b': "1995",
        'c': "1994",
        'd': "None of the above",
        'correct': 'b'
    },
    {
        'que': "What does CSS stands for?",
        'a': "Hypertext Markup Language",
        'b': "Cascading Style Sheet",
        'c': "Jason Object Notation",
        'd': "None of the above",
        'correct': 'b'
    } 
]

let index=0;
let optionInputs= document.querySelectorAll('.options');
let right=0;
let wrong=0;
let total= Questions.length;
let loadQuestion = () => {
    if(index=== total){
        return endQuiz()
    }
    reset();
let data = Questions[index];
document.getElementById("quesBox").innerText= `${index+1}) ${data.que}`;
optionInputs[0].nextElementSibling.innerText= data.a;
optionInputs[1].nextElementSibling.innerText= data.b;
optionInputs[2].nextElementSibling.innerText= data.c;
optionInputs[3].nextElementSibling.innerText= data.d;
}


function submitQuiz(){
    let data= Questions[index];
    let ans = getAnswer();
    if(ans === data.correct){
        right++
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}


function getAnswer(){
  let answer;
  optionInputs.forEach(
    (input) => {
        if(input.checked){
            answer = input.value; 
        }
    } 
  )
  return answer;
}

function reset(){
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

function endQuiz(){
    document.getElementById("box").innerHTML=`
    <div style= "text-align:center">
    <h3 style= "margin-top: 100px">Thank You for playing The Quiz</h3>
    <h2>${right}/${total} are correct</h2>
    `
}

loadQuestion();