const result=document.getElementById("inputvalue");

function addvalue(num){
result.value +=num;
}

function calculate(){
    try{
        result.value=eval(result.value);
    }
    catch{
        result.value="ERROR";
    }

}

function reset(){
    result.value="";
    
}