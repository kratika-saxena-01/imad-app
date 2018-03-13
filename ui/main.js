//counter code
var counter=0;
var button = document.gatElementById('button');
button.onclick=function(){
    //make a request to the counter endpoint
    //capture the response and store it in a variable
    //render the variable in the correct span
    counter =counter + 1;
    var span=document.getElementById('span');
    span.innerHTML=counter.toString();
    
};