let covid='';
fetch("https://nepalcorona.info/api/v1/news")
.then(function(response){return response.json()})
.then(function(news){
    // console.log(news)
    covid=news.data;
    covid.forEach(function(user){
        // let id=document.createElement('div');
        // id.innerHTML=user.lang;     
        // let title=document.createElement('h3');
        // title.innerHTML=user.source;
        // title.style.fontSize = '14px'
        
        let image=document.createElement('img');
        image.src=user.image_url;
        image.style.width='230px';
        image.style.height='200px';
        image.style.marginRight='10px';

        let summary=document.createElement('a');
        summary.innerHTML=user.summary;
        summary.href=user.url;
        summary.style.fontSize = '18px'
        summary.style.textDecoration='none';
        summary.style.textAlign='justify';

        let display =document.createElement('div');
        // display.appendChild(title);
        display.appendChild(image);
        display.appendChild(summary);
        display.style.padding = '5px';
        display.style.alignItems = 'center';
        display.style.width = '230px';
        display.style.height='500px';
        display.style.float='left';
        display.style.display='inline-block';
        display.style.margin = '10px';
        display.style.backgroundColor = 'whitesmoke'
        document.body.appendChild(display);
        console.log('asad',user);

    })
})
