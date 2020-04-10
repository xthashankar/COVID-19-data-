fetch("https://nepalcorona.info/api/v1/news")
.then(function(response){return response.json()})
.then(function(data){
    console.log(data)
    data.foreach(function(user){
        let id=document.createElement('div');
        id.innerHTML=user.data.source;
    })
})