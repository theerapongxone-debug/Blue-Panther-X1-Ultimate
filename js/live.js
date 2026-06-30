/* ==========================================
   Blue Panther X1 Ultimate v3.0
   Live Overlay Controller
========================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    initClock();
    initBrand();
    initGoal();

});

/* ---------- Clock ---------- */

function initClock(){

    const clock=document.getElementById("clock");

    if(!clock) return;

    updateClock();

    setInterval(updateClock,1000);

}

function updateClock(){

    const clock=document.getElementById("clock");

    if(!clock) return;

    const d=new Date();

    const h=String(d.getHours()).padStart(2,"0");
    const m=String(d.getMinutes()).padStart(2,"0");
    const s=String(d.getSeconds()).padStart(2,"0");

    clock.textContent=`${h}:${m}:${s}`;

}

/* ---------- Brand ---------- */

function initBrand(){

    const title=document.getElementById("brandTitle");
    const sub=document.getElementById("brandSubtitle");

    if(title)
        title.textContent=CONFIG.streamer.name;

    if(sub)
        sub.textContent=CONFIG.streamer.subtitle;

}

/* ---------- Goal ---------- */

function initGoal(){

    const fill=document.getElementById("goalFill");
    const text=document.getElementById("goalText");

    if(!fill || !text) return;

    updateGoal();

}

function updateGoal(){

    const fill=document.getElementById("goalFill");
    const text=document.getElementById("goalText");

    let current=CONFIG.goal.current;
    let target=CONFIG.goal.target;

    let percent=(current/target)*100;

    if(percent>100) percent=100;

    fill.style.width=percent+"%";

    text.textContent=current+" / "+target+" บาท";

}

/* ---------- API ---------- */

window.BluePanther={

    setGoal(value){

        CONFIG.goal.current=value;

        updateGoal();

    },

    addDonation(amount){

        CONFIG.goal.current+=amount;

        updateGoal();

    }

};
