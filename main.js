

const burger = document.querySelector("#menu-btn");
const ul = document.querySelector(" nav ul");

const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

const navlink = document.querySelectorAll(".nav-link");
navlink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);



c=0;
function autochange(){
    if(c==1){
        document.getElementById("photo").src="img/doctors.jpg";
    }
    if(c==2){
        document.getElementById("photo").src="img/General-ward-2.jpg";
    }
    if(c==3){
        document.getElementById("photo").src="img/hospitalssss.webp";
    }
    if(c==4){
        document.getElementById("photo").src="img/WarrenJagger.jpg";
    }
    c++;
    setTimeout("autochange()",1500);
    if(c>=5){
        c=1;
    }

}
// clock

const clock = document.getElementById('clock');
setInterval(function(){
    let date=new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000);