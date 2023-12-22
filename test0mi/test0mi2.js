var menu_button = document.getElementById("menu_button");
var menu_window = document.getElementById("menu_window");

function open_menu(){
    if(menu_window.style.display === "none"){
        menu_window.style.display = "block";
    }
    else{
        menu_window.style.display = "none"
    }
}

menu_button.addEventListener("click", function(){
    console.log("func!")
    if(menu_window.style.display === "none"){
        menu_window.style.display = "block";
    }
    else{
        menu_window.style.display = "none"
    }
});