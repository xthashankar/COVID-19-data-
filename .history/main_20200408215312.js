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
// function search(){
// let filter=document.getElementById('filter').value.toUpperCase(); 
// let box =document.getElementById('coranavirus');
// let tr=box.getElementsByTagName('tr');
// for (var i=0;i<tr.length;i++){
//      let  td=tr[i].getElementsByTagName ('td')[0];
//      if(td){
//          let text=td.textContent||td.innerHTML;
//          if(text.toUpperCase().indexof(filter)>-1)
//          {
//              tr[i].style.display="";

//          }else{
//              tr[i].style.display="none";
//          }
//      }
// }
// console.log(tr);
// }
function search(){
var input, filter, table, tr, td, i, txtValue;
input = document.getElementById("search");
filter = input.value.toUpperCase();
table = document.getElementById("coranavirus");
tr = table.getElementsByTagName("tr");
for (i = 0; i < tr.length; i++) {
  td = tr[i].getElementsByTagName("td")[0];
  if (td) {
    txtValue = td.textContent || td.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }       
}
}