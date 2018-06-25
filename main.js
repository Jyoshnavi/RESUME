function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status==200){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  fun_career(data.careerObjective);
  fun_education(data.education);
  fun_achieve(data.Achievements);
  fun_tech(data.TechnicalSkills);

});

var div2=document.getElementById("child2");
// Career Objective

function fun_career(career_obj)
{
  var heading1=document.createElement("h2");
  heading1.textContent="Career Objective";
  div2.appendChild(heading1);

  var list3=document.createElement("hr");
  div2.appendChild(list3);

var info=document.createElement("p");
info.textContent=career_obj.info;
div2.appendChild(info);
}
function fun_education(edu){

    var list4=document.createElement("hr");
    div2.appendChild(list4);

  var heading=document.createElement("h2");
  heading.textContent="Eduction Qualification";
  div2.appendChild(heading);

  var lists=document.createElement("hr");
  div2.appendChild(lists);

  var list=document.createElement("ul");
  div2.appendChild(list);

  for(var i=0;i<edu.length;i++){

    var listItem=document.createElement("li");
    listItem.textContent=edu[i].degree;
    list.appendChild(listItem);

    var listItem2=document.createElement("ul");
    listItem2.textContent=edu[i].Institute;
    list.appendChild(listItem2);

    var listItem3=document.createElement("ul");
    listItem3.textContent=edu[i].data;
    list.appendChild(listItem3);
  }
}

function fun_achieve(ach)
    {

      var hori=document.createElement("h2");
      hori.textContent="Achievements";
      div2.appendChild(hori);

      var head=document.createElement("hr");
      div2.appendChild(head);

      var list=document.createElement("ul");
      div2.appendChild(list);

        for(var i=0;i<ach.length;i++)
        {
          var listIte=document.createElement("li");
        listIte.innerHTML=ach[i].Name;
          list.appendChild(listIte);
        }
  }
  function fun_tech(skills)
  {
    var head=document.createElement("h2");
    head.textContent="Technical Skills";
    div2.appendChild(head);

    var head1=document.createElement("hr");
    div2.appendChild(head1);

    var tr="";
    var table=document.createElement("table");
    div2.appendChild(table);
    for(i=0;i<skills.length;i++)
   {
    tr+="<tr><td>"+skills[i].name+"</td><td>"+skills[i].data+"</td></tr>";
}
table.innerHTML=tr;
table.border="1";
}
