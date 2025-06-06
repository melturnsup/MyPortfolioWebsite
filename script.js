//Sidebar Navigation Event handlers    
const menu_icon_box = document.querySelector(".menu_icon_box");
const sidebar = document.querySelector(".sidebar_box");

menu_icon_box.onclick = function() {
    menu_icon_box.classList.toggle("active");
    sidebar.classList.toggle("active");
}

document.onclick = function(e) {
    if(!menu_icon_box.contains(e.target) && !sidebar.contains(e.target)) {
        menu_icon_box.classList.remove("active");
        sidebar.classList.remove("active");
    }
};