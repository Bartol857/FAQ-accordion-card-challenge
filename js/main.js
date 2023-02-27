const accordion = document.querySelectorAll(".faq__box");

accordion.forEach((item) => {
    const question = item.querySelector(".faq__question");
    
    question.addEventListener('click', () => {
        accordion.forEach(close => {
            if(close != item){
                close.classList.remove("active");
            }
        });
        item.classList.toggle("active");
    })
});