
const {Component} = React;

class Demo extends Component {
	constructor() {
		super();
		this.state = {
			numOfCards: 50
		}
	}

	handleCardCreation = (maxCount) =>
		Array(maxCount).fill(0).map((_, idx) => idx + 1)

	render() {
		const mainData = this.handleCardCreation(this.state.numOfCards);
		return (
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="card-columns">
							{
								mainData.map((data) => (
									<div className="card bg-dark text-white mb-3">
										<div className="card-header">
											<div className="card-title">
												<h5>Card #{data}</h5>
											</div>
										</div>
										<div className="card-footer">
											<div className="text-center">
												Demo card #{data}
											</div>
										</div>
									</div>
								))
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
}