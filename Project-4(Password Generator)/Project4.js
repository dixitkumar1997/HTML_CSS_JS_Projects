let upperSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerSet="abcdefghijklmnopqrstuvwxyz";
let symbolSet="!@#$%^&*()_+/";
let numberSet="1234567890";

let passBox =document.getElementById("text")
let totalChar=document.getElementById("total-char")
let upperInput= document.getElementById("upper-case")
let lowerInput= document.getElementById("lower-case")
let numberInput= document.getElementById("numbers")
let symbolsInput= document.getElementById("symbols")



function getRandomData(dataSet){
return dataSet[Math.floor(Math.random()*dataSet.length)]
}

function generatePassword(password=""){
if(upperInput.checked){
    password+=getRandomData(upperSet);
}
if(lowerInput.checked){
    password+=getRandomData(lowerSet);
}
if(numberInput.checked){
    password+=getRandomData(numberSet);
}
if(symbolsInput.checked){
    password+=getRandomData(symbolSet);
}
if(password.length<totalChar.value){
    return generatePassword(password);
}
passBox.innerText=truncateString(password , totalChar.value);
}
document.getElementById("btn").addEventListener(
    "click",
    function (){
        generatePassword();
    }
)

function truncateString(str,num){
    if(str.length>num){
        let subStr=str.substring(0,num)
        return subStr;
    }
    else{
        return str;
    }
}
generatePassword()