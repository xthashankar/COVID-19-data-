// let who='';
let URL='https://nepalcorona.info/api/v1/data/world'
fetch(URL)
.then(function(response){
   return response.json()
}).then(function(covid){
//    console.log(covid);
       if(covid.length>0)
       {
           var coviddata='';
           covid.forEach(function(data){
            // coviddata +="<tr>";
            coviddata +="<tr><td>"+data.country+"</td>";
            coviddata +="<td>"+data.totalCases+"</td>";
            coviddata +="<td>"+data.newCases+"</td>";
            coviddata +="<td>"+data.totalDeaths+"</td>";
            coviddata +="<td>"+data.newDeaths+"</td>";
            coviddata +="<td>"+data.activeCases+"</td>";
            coviddata +="<td>"+data.totalRecovered+"</td>";
            coviddata +="<td>"+data.criticalCases+"</td></tr>";
            console.log(coviddata);
            document.getElementById('coranavirus').innerHTML=coviddata;
           })
       }
   })

   //function search()
const search = () =>{
let filter=document.getElementById('search').value.toUpperCase(); 
let box =document.getElementsByClassName('table table-bordered  table-striped');
let tr=box.getElementsByTagName('tr');
for (var i=0;i<tr.length;i++){
     let  td=tr[i].getElementsByTagName ('td')[0];
}


    }
