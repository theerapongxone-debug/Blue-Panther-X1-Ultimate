const current = 250;

const target = 1000;

const percent = (current / target) * 100;

document.getElementById("progressBar").style.width =
percent + "%";

document.getElementById("goalText").textContent =
current + " / " + target;
