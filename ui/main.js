console.log('Loaded!');
//change the text of the one div
var element = document.getElementById('one');
element.innerHTML='kratika';

//move image
var img=document.getElementById('two');
img.onclick=function(){
  img.style.marginLeft='100px';  
};