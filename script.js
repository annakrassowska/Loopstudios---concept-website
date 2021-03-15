let acc = document.querySelector(".questions-answers");
let answer = document.querySelector(".container-faq")
let i;


const switchClass = () => {
  acc.addEventListener('click', () => {
    answer.classList.toggle('a-active');
  });
  
  }
  switchClass();
  