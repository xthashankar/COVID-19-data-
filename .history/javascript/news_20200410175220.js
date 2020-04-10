let covid='';
fetch("https://nepalcorona.info/api/v1/news")
.then(function(response){return response.json()})
.then(function(news){
    // console.log(news)
    covid=news.data;
    covid.forEach(function(user){
        let id=document.createElement('div');
        id.innerHTML=user._id;

        let date=document.createElement('h1');
        date.innerHTML=user.created_at;
        
        let title=document.createElement('h3');
        title.innerHTML=user.source;
        
        let image=document.createElement('img');
        image.src=user.image_url;
        
        var om =document.createElement('div');
        om.appendChild(id);
        om.appendChild(date);
        om.appendChild(title);
        om.appendChild(image);
        
      
        document.body.appendChild(id);
        console.log('asad',user);

        
    })
})