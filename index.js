
/*var prev_e = 0;

function _load_content(e, page) {
	$("#content").load(page);
	console.log(page);
	prev_e = e;
}

function load_content(e, page) {
	history.replaceState(page, null, "?page=" + page);
	_load_content(prev_e, page);
}

$(document).ready(function () {
	load_content(prev_e, "parts/home.html");
	console.log(this);

	window.addEventListener("popstate", function (event) {
		// Get the page from the history state object
		console.log("pop page: " + event.state);
		_load_content(prev_e, event.state);
		window.history.go(-1);
	});
});
var prev_e = 0;*/

$(document).ready(function () {
	// Get the page from the link `?page=/path/to/path.html`
	const url_params = new URLSearchParams(window.location.search);
	page_source = url_params.get("page");
	if (page_source == null) {
		page_source = "./parts/home.html";
	}
	$("#content").load(page_source);
});