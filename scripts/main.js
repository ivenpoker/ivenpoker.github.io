
$(function () {

	$("button#main-btn").click(function () {
		window.alert("this is working well")
	})

	$("button#about-btn").on("click", function () {
		window.alert("This is the about page");
	})

})