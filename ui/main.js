//counter code

var button = document.getElementById('three');
button.onclick=function(){
    
    //create a request object
    var request = new XMLHttpRequest();
    //capture the response and store it in a variable
    
    request.onReadyStateChange = function(){
        if(request.readyState === XMLHttpRequest.DONE)
        {
            //take some action 
            if(request.status===200){
                var counter = request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
        //not done anything
    };
    //make a request to the counter endpoint
   request.open('GET','http://kratikathesaxena.imad.hasura-app.io/counter',true);
   request.send(null);
    
    
};