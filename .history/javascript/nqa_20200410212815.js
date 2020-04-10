let qa='';
fetch('https://nepalcorona.info/api/v1/faqs')
.then(response=>response.json())
.then(faq=>{
    console.log(faq);
    qa=faq.data;
    qa.forEach(function(userdata){
        // console.log(userdata);
        let question=document.createElement('h1');
        question.innerHTML=userdata.question_np;
        question.style.paddingRight="1px";
        question.style.textAlign='right';

        let answer=document.createElement('h3');
        answer.innerHTML=userdata.answer_np;
        
        let category=document.createElement('h5');
        category.innerHTML=userdata.category;

        let display =document.createElement('div');
        display.style.background="whitesmoke";
        display.style.width="100%";
        display.style.borderRadius="15px";
        display.appendChild(question);
        display.appendChild(answer);
        display.appendChild(category); 
        document.body.appendChild(display);
    })

})