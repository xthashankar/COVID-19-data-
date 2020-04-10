fetch("https://nepalcorona.info/api/v1/news")
.then(function(response){return response.json()})
.then(function(data){console.log(data)