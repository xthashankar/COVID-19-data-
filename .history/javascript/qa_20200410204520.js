let qa='';
fetch('https://nepalcorona.info/api/v1/faqs')
.then(response=>response.json())
.then(faq=>{
    console.log(faq);
    qa=faq.data;
    qa.forEach(function(userdata){
        // console.log(userdata);
        let question=document.createElement('h1');
        question.innerHTML=userdata.question;
        question.style.paddingRight="1px";
        question.style.textStyle='right';

        let answer=document.createElement('h3');
        answer.innerHTML=userdata.answer;
        
        let category=document.createElement('h5');
        category.innerHTML=userdata.category;

        let update=document.createElement('h2');
        update.innerHTML=userdata.updated_at;

       
        let display =document.createElement('div');
        display.style.background="whitesmoke";
        display.style.width="50%";
        display.appendChild(question);
        display.appendChild(answer);
        display.appendChild(category);
        display.appendChild(update); 
        document.body.appendChild(display);
    })

})