const navbar = document.querySelector(".nav1");

navbar.addEventListener("mouseover", function(){
    navbar.style.borderBottom = "2px solid black";
})

gsap.to(".mobile",{
    y:5,
    duration:2,
    delay:1,
    repeat:-1,
    yoyo:true,
    ease:"power1.inOut"
})

