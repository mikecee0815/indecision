

const minusOne =  () => {
	
	console.log('minusOne');
}

const reset =  () => {
	
	console.log('reset');
	
}

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.plusOne = this.plusOne.bind(this);
		this.minusOne = this.minusOne.bind(this);
		this.reset = this.reset.bind(this);
		
		this.state = {
			count: 0
		}
	}

	componentDidMount() {
		const strCount = localStorage.getItem('count');
		const count = parseInt(strCount,10);
		if (!isNaN(count)) {
			this.setState(() => ({count}))
		};

		console.log(' Component is Mounted!!');
		
	}

	componentDidUpdate(prevProps, prevState) {
		
		if (prevState.count !== this.state.count) {
			localStorage.setItem('count',this.state.count);
			console.log( 'Updated!!');
		};
	} 
	 
	 plusOne() {
	this.setState((prevState) => {
		return {
			count: prevState.count + 1
		}
	});
}
	 minusOne() {
	this.setState((prevState) => {

		return {
			count: prevState.count - 1
		}
	});
}
	 reset() {
	this.setState(() => {

		return {
			count: 0
		}
	});
}
	render() {
		return (
			<div>
				<h1>Counter: {this.state.count}</h1>
				<button onClick = {this.plusOne} > +1</button>
				<button onClick = {this.minusOne} > -1</button>
				<button onClick = {this.reset} >Reset</button>
			</div>
			);
	}
}

// Counter.defaultProps = {
// 	count:0
// }

ReactDOM.render(<Counter count={0} />,document.getElementById('app'));





