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

        let answer=document.createElement('h3');
        answer.innerHTML=userdata.answer;
        
        let category=document.createElement('h5');
        category.innerHTML=userdata.category;

        let update=document.createElement('h2');
        update.innerHTML=userdata.update_at;

       
        let display =document.createElement('div');
        display.appendChild(id);
        display.appendChild(date);
        display.appendChild(title);
        display.appendChild(image);
        display.appendChild(summary);
        document.body.appendChild(display);
    })

})