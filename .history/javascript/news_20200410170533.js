let covid='';
fetch("https://nepalcorona.info/api/v1/news")
.then(function(response){return response.json()})
.then(function(news){
    // console.log(news)
    covid=news.data;
    covid.forEach(function(user){
        let image=document.createElement('img');
        image.src=user.image_url;
        image.innerHTML=source_url[0];
        image.style.width="100px";
        // id.style.display='flex';
        // id.style.backgroundcolor='yellow'; 
        // id.style.color='red';
        document.body.appendChild(image);
        console.log('asad',user);

        
    })
})