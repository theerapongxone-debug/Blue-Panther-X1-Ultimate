let total=300;

function update(){

const min=Math.floor(total/60);

const sec=total%60;

document.getElementById("countdown").textContent=

String(min).padStart(2,"0")

+":"

+

String(sec).padStart(2,"0");

if(total>0){

total--;

}

}

update();

setInterval(update,1000);
