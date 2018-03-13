console.log('Loaded!');
//change the text of the one div
var element = document.getElementById('one');
element.innerHTML='kratika';

//move image
var img=document.getElementById('two');
var marginLeft=0;
function moveRight(){
  marginLeft=marginLeft+10;
  img.style.marginLeft=marginLeft + 'px';
}
img.onclick=function(){
   
  var interval =setInterval(moveRight,100);
};