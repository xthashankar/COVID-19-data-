let covid='';
fetch("https://nepalcorona.info/api/v1/news")
.then(function(response){return response.json()})
.then(function(news){
    // console.log(news)
    covid=news.data;
    covid.forEach(function(user){
        let id=document.createElement('div');
        id.src=user._id;
        // image.innerHTML=source_url[0];
        id.style.width="100px";
        // id.style.display='flex';
        // id.style.backgroundcolor='yellow'; 
        // id.style.color='red';
        document.body.appendChild(id);
        console.log('asad',user);

        
    })
})