let end_date= "1 July 2023 10:00 AM";
document.getElementById("date").innerText= end_date;
let inputs=document.querySelectorAll("input")

function clock(){
    let end = new Date(end_date);
    let now = new Date();
    let diff= (end - now)/1000;
    if(diff<0){
        return;
    }
  inputs[0].value = Math.floor(diff/24/3600);
  inputs[1].value = Math.floor((diff/3600)%24);
  inputs[2].value = Math.floor((diff/60)%60);
  inputs[3].value = Math.floor(diff%60);

}
setInterval(
    ()=>{
        clock();
    },1000
)

