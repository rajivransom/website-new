let dark = document.getElementById("dark");
let theme = document.getElementById("theme");
let mode = "light";

dark.addEventListener('click',function(){
    if(mode == "dark"){
        theme.href = ' ';
        mode="light";
        dark.innerHTML="Dark";
    }
    else{
        theme.href = 'dark.css';
        mode="dark";
        dark.innerHTML="Light";
    }
})