


document.addEventListener("DOMContentLoaded", function(){
    let menu_button = document.getElementById("menu_open_button");
    let menu_window = document.getElementById("menu_window");
    let menu_button_text = document.getElementsByClassName('menu_button_text');
    let defalt_window = document.getElementById("body");
    menu_button.addEventListener("click", function(){
        console.log("func!");
        if(menu_button.id === "menu_open_button"){
            menu_window.style.display = "block";
            defalt_window.style.display = "none";
            menu_button.id = "menu_close_button";
            console.log("funcだね!");
            if(menu_button_text[0].style.display === "block"){
                menu_button_text[0].style.display = "none";
                menu_button_text[1].style.display = "block"
            }
            else{
                menu_button_text[0].style.display = "block"
                menu_button_text[1].style.display = "none"
            }
        }
        else{
            menu_window.style.display = "none";
            defalt_window.style.display = "block";
            menu_button.id = "menu_open_button";
            if(menu_button_text[0].style.display === "block"){
                menu_button_text[0].style.display = "none";
                menu_button_text[1].style.display = "block"
            }
            else{
                menu_button_text[0].style.display = "block"
                menu_button_text[1].style.display = "none"
            }
        }
    });
    
});
