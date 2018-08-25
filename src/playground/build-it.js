
class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.show = this.show.bind(this);
		this.state = {
			visible:false
		}	
	}
	show() {
		this.setState((prevState) => {
			return {
				visible: !prevState.visible
			}
		})
	}
	render() {
		return (
			<div>
				<h1>Visibilty Component</h1>
				<button onClick= {this.show}>{this.state.visible ? 'hide content':'show content'}</button>
				{this.state.visible && <p>Here is the content</p>}				
			</div>
	
			);
	}
}
ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));


