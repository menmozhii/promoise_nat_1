var h1=document.createElement("h1");
h1.innerHTML=" NATIONALIZE API ";

                //*create input for the entering name*//
 var div=document.createElement("div");
 div.style.textAlign="center";

 var input=document.createElement("input");
 input.setAttribute("type","text");
 input.setAttribute("id","name");
 input.style.width="30%";
 input.setAttribute("placeholder","Enter the name");

                         //*creating button*//
var linebreak=document.createElement("br");
 var button =document.createElement("button");
 button.setAttribute("type","button");
 button.classList.add("btn","btn-primary");
 button.style.margin="40px";
 button.innerHTML="search";
 button.addEventListener("click",foo);

 
var outputdiv=document.createElement("div");
outputdiv.style.fontSize="20px";
outputdiv.style.background="lightblue";
outputdiv.style.margin="100px";
div.append(h1,input,linebreak,button,outputdiv);
    document.body.append(div);

                           //* fetching nationalise ApI *//
 async function foo()
 {
 try{

    let res=document.getElementById("name").value;
    let url=`https://api.nationalize.io/?name=${res}`;
    let res1=await fetch(url);
    let res2=await res1.json();
    console.log(res2);
    let res7=res2.name;
    console.log(res7);

let res3=res2.country[0].country_id;
console.log(res3);
let res4=res2.country[0].probability;
console.log(res4);
let res5=res2.country[1].country_id;
console.log(res5);

let res6=res2.country[1].probability;
    console.log(res6);

                       //*Display output*//

outputdiv.innerHTML=`
NAME:${res7}<br>
FRIST COUNTRY:${res3}<br>
PROBABILITY:${res4}<br>
SECOND COUNTRY:${res5}<br>
PROBABILITY:${res6}<br>`
    
}
catch(error)
{
    console.log(error)
}

 }
 