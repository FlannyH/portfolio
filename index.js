var prev_e = 0;

function load_content(e, page) {
    $("#content").load(page);
    console.log(page);
}

$(document).ready(function () {
    load_content(prev_e, "parts/home.html");
    console.log(this);
});
