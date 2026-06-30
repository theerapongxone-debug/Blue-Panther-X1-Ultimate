const alertBox=document.getElementById("alertBox");

function showAlert(title,message){

document.getElementById("alertTitle").textContent=title;

document.getElementById("alertMessage").textContent=message;

playNotify();

alertBox.classList.add("show");

setTimeout(()=>{

alertBox.classList.remove("show");

},5000);

}

/* ทดสอบ */

setTimeout(()=>{

showAlert(

"NEW FOLLOW",

"ขอบคุณที่ติดตาม Blue Panther X1 💙"

);

},1000);
