let car='';
fetch("https://nepalcorona.info/api/v1/news")
.then(function(response){return response.json()})
.then(function(news){
    console.log(news)
    car=news.data;
    car.foreach(function(user){
        let id=document.createElement('div');
        id.innerHTML=user.source;
    })
})