function additem(){




var liel=document.createElement("li");

var txt=document.getElementById("tt1")

var listvalue=document.createTextNode(txt.value);

liel.appendChild(listvalue);

var listv=document.getElementById("l1");
listv.appendChild(liel);

txt.value=""



}


function remov(){

var torem=document.getElementById("l1");

torem.innerHTML=""


}