var prev_e = 0;

function load_content(e, page) {
    if (prev_e != 0) {
        prev_e.style.color = "#000000";
    }
    e.style.color = "#FFFFFF";
    prev_e = e;
    $("#content").load(page);
    console.log(page);
}

$(document).ready(function () {
    prev_e = document.getElementById("default_page");
    load_content(prev_e, "parts/home.html");
});
