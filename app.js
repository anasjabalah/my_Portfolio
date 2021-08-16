var scale = document.getElementById("scale");
var remov_img = document.getElementById("remov_img");
var nav_img = document.getElementById("nav_img");
var contener_1 = document.getElementById("contener_1");

nav_img.addEventListener('click',()=>{
    scale.classList.add("ol_img_c")
    contener_1.classList.add('contener_1');
})

remov_img.addEventListener('click',()=>{
    scale.classList.remove("ol_img_c");
    contener_1.classList.remove('contener_1');
})