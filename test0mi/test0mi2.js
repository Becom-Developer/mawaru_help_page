


document.addEventListener("DOMContentLoaded", function(){
    var menu_button = document.getElementById("menu_button");
    var menu_window = document.getElementById("menu_window");
    menu_button.addEventListener("click", function(){
        console.log("func!");
        if(menu_window.style.display === "none"){
            menu_window.style.display = "block";
        }
        else{
            menu_window.style.display = "none"
        }
    });
});

