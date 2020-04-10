let qa="";
fetch('https://nepalcorona.info/api/v1/faqs')
.then(response=>response.json())
.then(data=>{
    console.log(data);
    qa=data;
    qa.foreach(function(userdata){
        console.log(userdata);
    })

})