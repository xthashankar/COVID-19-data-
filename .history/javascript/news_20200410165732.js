let car='';
fetch("https://nepalcorona.info/api/v1/news")
.then(function(response){return response.json()})
.then(function(news){
    // console.log(news)
    car=news.data;
    car.forEach(function(user){
        let image=document.createElement('img');
        id.innerHTML=user.source_url[0];
        id.style.display='flex';
        id.style.backgroundcolor='yellow'; 
        id.style.color='red';
        document.body.appendChild(id);
        console.log('asad',user);

        
    })
})