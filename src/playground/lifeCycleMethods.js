// class Gig extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			gigs: props.gigs
// 		}
// 	}
// 	render() {
// 		return(
// 			<div>
// 			<h1>Hello</h1>
// 			{this.props.gigs.map((gig) => {
// 				return <p key={gig}>{gig}</p>
// 			}
// 				)}	 
// 			</div>
// 			) 	
// 	}
// }

// Gig.defaultProps = {
// 		gigs:['Treme','Venetian Shores','Tanner Park','Tony Cuban']
// 	};

class SongList extends React.Component {
	constructor(props) {
		super();
		this.state = {
			songs:props.songs
		}
	}
	
	componentDidMount() {
		console.log('CDM')
		this.setState(() => {
			return
			{
				songs:props.songs
			}
		})
	}
		componentDidUpdate(prevProps,prevState) {
			console.log('CDU')
	}
	
	
	// 	if (prevState.songs.length !== this.State.songs.length) {
	// 		console.log('Data Updated');
	// 	};
	
	render() {
		return(
			<div>
				<h2>SongList</h2>
				{this.state.songs.map((song) => {
					return <p key={song}>{song}</p>
				})}
			</div>
			)
	}
}
SongList.defaultProps = {
	songs: ['Bilongo','El cuarto de Tula']
}

ReactDOM.render(<SongList />,document.getElementById('app'));


