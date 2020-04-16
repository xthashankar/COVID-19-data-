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
        
        // let image=document.getElementsByClassName('image');
        // image.src=user.image_url;
        // image.style.width='200px';
        // image.style.height='200px';
        // image.style.marginRight='10px';


        
        // let summary=document.createElement('a');
        // summary.innerHTML=user.summary;
        // summary.href=user.url;
        // summary.style.fontSize = '18px'

        // let date=document.createElement('h1');
        // date.innerHTML=user.created_at;
        
        // let display =document.createElement('div');
        // // display.appendChild(id);
        // display.appendChild(date);
        // display.appendChild(title);
        // display.appendChild(image);
        // display.appendChild(summary);
        // display.style.padding = '10px';
        // display.style.display='inline-block';
        // display.style.alignItems = 'center';
        // display.style.width = '230px';
        // display.style.height='230px';
        // display.style.margin = '20px';
        // display.style.backgroundColor = '#faf4ff'
        // document.body.appendChild(display);
        // console.log('asad',user);
 //For News Title
 let title = document.createElement('p');
 title.innerHTML = user.title;
 title.style.padding = '8px';
 title.style.fontSize = '14px';
 title.style.textAlign="center";

 //For News Source
 let source = document.createElement('p')
 source.innerHTML = 'News Source: '+user.source
 source.style.fontSize = '14px'

 //For News Summary
 let summary = document.createElement('a')
 summary.innerHTML = 'News Summary: '+ user.summary +'.........'
 summary.style.fontSize = '18px'
 summary.href = user.url;

 //Display Users Profile Image
 var profileImage = document.createElement('img')
 profileImage.src = user.image_url;
 profileImage.style.height = '230px';
 profileImage.style.width = '230px';
 profileImage.style.marginRight = '10px';
 

 //Display date
 var date = document.createElement('p')
 date.innerHTML = 'News Created Time: '+ user.created_at.substr(0, 10);


 //Merge usersData
 var merge = document.createElement('div')
 merge.appendChild(title);
 merge.appendChild(source);
 merge.appendChild(profileImage);
 merge.appendChild(date);
 merge.appendChild(summary);
 merge.style.padding = '10px';
 merge.style.alignItems = 'center';
 merge.style.width = '230px';
 merge.style.display='inline-block'
; merge.style.margin = '5px auto';
 merge.style.backgroundColor = 'yellow'
 document.body.appendChild(merge);
        
    })
})