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
            if(data.country!="")
            {
            coviddata +="<tr><td>"+data.country+"</td>";
            coviddata +="<td>"+data.totalCases+"</td>";
            coviddata +="<td>"+data.newCases+"</td>";
            coviddata +="<td>"+data.totalDeaths+"</td>";
            coviddata +="<td>"+data.newDeaths+"</td>";
            coviddata +="<td>"+data.activeCases+"</td>";
            coviddata +="<td>"+data.totalRecovered+"</td>";
            coviddata +="<td>"+data.criticalCases+"</td></tr>";
            console.log(coviddata);
            }
            document.getElementById('coranavirus').innerHTML=coviddata;
           })
       }
   })
   //for search
function search(){
    let filter=document.getElementById("search").value.toUpperCase(); 
    let table=document.getElementById("coranavirus");
    let tr=table.getElementsByTagName("tr");
    for(let i=0;i<tr.length;i++)
    {
     let td=tr[i].getElementsByTagName("td")[1];
        if(td)
        {
         let txtValue=td.textContent||td.innerText;
         if(txtValue.toUpperCase().indexOf(filter)>-1) 
            {
            tr[i].style.display="";
            }else
            {
            tr[i].style.display="none";
            }
        }       
    }
}