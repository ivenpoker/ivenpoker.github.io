const {Component} = React

class Test extends Component {
	render() {
		return (
			<div className="jumbotron bg-secondary text-dark">
				<div className="container">
					<h4>Freaking sweet</h4>
				</div>
			</div>
		);
	}
}

let OLD_VIEW = "card"

$(function () {

	$("button#main-btn").click(function () {
		if (window.confirm("Remove all cards from the UI ?")) {
			$("div#main-btn").children();
		}
	})

	$("button#toggle-btn").click(function () {
		if (OLD_VIEW == "card") {
			ReactDOM.render(<Demo/>, $("div#main-react")[0])
			OLD_VIEW = "jumbotron"
		} else {
			ReactDOM.render(<Test/>, $("div#main-react")[0])
			OLD_VIEW = "card"
		}
	}).trigger("click");

	$("button#about-btn").on("click", function () {
		window.alert("This is the about page");
	})

})