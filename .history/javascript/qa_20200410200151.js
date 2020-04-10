let qa="";
fetch('https://nepalcorona.info/api/v1/faqs')
.then(response=>response.json())
.then(faq=>{
    console.log(faq);
    qa=faq.data;
    qa.foreach(function(userdata){
        console.log(userdata);
        let question=document.createElement('h1');
        question.innerHTML=userdata.question;

        let answer=document.createElement('h3');
        answer.innerHTML=userdata.answer;
        
        let category=document.createElement('h5');
        category.innerHTML=userdata.category;

        let update=document.createElement('h2');
        update.innerHTML=userdata.update_at;
    })

})