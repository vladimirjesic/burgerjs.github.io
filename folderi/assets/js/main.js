var paths = ["index.html", "menu.html", "about.html", "gallery.html", "author.html"];
var nav = ["HOME", "MENU", "ABOUT US", "GALLERY", "AUTHOR"];
var menu = document.getElementById("menu");
var links = "";
for(var i=0; i<paths.length; i++) {
    links+="<li class='nav-item'><a class='nav-link linkh' href=" + paths[i] + ">" + nav[i] + "</a></li>";
}
menu.innerHTML=links;




var footer = document.getElementById("ft");
footer.innerHTML="<p class='mb-0 p-1'>&copy All rights reserved Vladimir Jesic 2023. | <a href='index.html' target='_blank'>Documentation</a> | <a href='index.html' target='_blank'>Sitemap</a></p>"