function getColor(){
    let RandomNumber = Math.floor(Math.random()*16777215);
    let RandomCode="#"+ RandomNumber.toString(16);
    document.getElementById("code").innerText=RandomCode
    document.body.style.backgroundColor=RandomCode;
    navigator.clipboard.writeText(RandomCode);
    document.getElementById("btn").style.backgroundColor=RandomCode
}
document.getElementById("btn").addEventListener(
    "click",getColor
)
getColor();