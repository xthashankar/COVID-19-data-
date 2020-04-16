let covid='';
fetch("https://nepalcorona.info/api/v1/news")
.then(function(response){return response.json()})
.then(function(news){
    // console.log(news)
    covid=news.data;
    covid.forEach(function(user){
        // let id=document.createElement('div');
        // id.innerHTML=user.lang;     
        let title=document.createElement('h3');
        title.innerHTML=user.source;
        title.style.fontSize = '14px'
        
        let image=document.createElement('img');
        image.src=user.image_url;
        image.style.width='200px';
        image.style.height='200px';
        image.style.marginRight='10px';


        
        let summary=document.createElement('a');
        summary.innerHTML=user.summary;
        summary.href=user.url;
        summary.style.fontSize = '18px'

        let display =document.createElement('div');
        display.appendChild(title);
        display.appendChild(image);
        display.appendChild(summary);
        display.style.paddingRight = '10px';
        display.style.alignItems = 'center';
        display.style.width = '230px';
        display.style.display='inline-box';
        display.style.margin = '20px';
        display.style.backgroundColor = '#faf4ff'
        document.body.appendChild(display);
        console.log('asad',user);

    })
})
