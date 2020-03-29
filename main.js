// let who='';

let URL='https://nepalcorona.info/api/v1/data/world'
fetch(URL)
.then(function(response){
   return response.json()
}).then(function(covid){
//    console.log(covid);
// who=covid;
   covid.forEach(function(data)
   {
    let virus=document.createElement('div');
    virus.innerHTML=data.country; 
    document.body.appendChild(virus);

       let cases=document.createElement('div');
       cases.innerHTML=data.totalCases;
       document.body.appendChild(cases);
   })
        
});
