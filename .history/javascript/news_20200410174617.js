let covid='';
fetch("https://nepalcorona.info/api/v1/news")
.then(function(response){return response.json()})
.then(function(news){
    // console.log(news)
    covid=news.data;
    covid.forEach(function(user){
        let id=document.createElement('div');
        id.innerHTML=user._id;
        let title=document.createElement('h1');
        id.innerHTML=user.created_at;
        
        let home=docment.createElement('h3');
        id.innerHTML=user.source;
        
        let image=document.createElement('img');
        image.src=user.image_url;
      
        document.body.appendChild(id);
        console.log('asad',user);

        
    })
})