const {Component} = React

$(function () {

	ReactDOM.render(<Demo/>, $("div#main-react")[0])

	$("button#main-btn").click(function () {
		if (window.confirm("Remove all cards from the UI ?")) {
			$("div#main-btn").children();
		}
	})

	$("button#about-btn").on("click", function () {
		window.alert("This is the about page");
	})

})