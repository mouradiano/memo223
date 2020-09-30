var myp=document.getElementById('show');

var mycolor = document.forms[0].color.value;



function Onchange(){
  
  
    
  document.getElementById('color').style.backgroundColor= document.forms[0].color.value;
  
}


function change(){
  
  
  document.getElementById('cha').style.backgroundColor= document.forms[0].color.value;

  
  myp.innerHTML= "this is color code : "+ document.forms[0].color.value;
  
 
 
  
  
  
}