import React, { Component } from 'react';

class ManageState extends Component {

	constructor(props){
		super(props);
		this.state={product:'fruit',name:'Apple',imageurl:'https://i2.wp.com/thefarmersmarketgh.com/wp-content/uploads/2012/05/green-red-apple-fruit.jpg'}
	}

	changeState=() =>{
			this.setState({product:'fruit',name:'PineApple',imageurl:'https://www.organicfacts.net/wp-content/uploads/pineapplecalories.jpg'});
	};
	
	render(){
		return(<div>
				<button onClick={this.changeState}>Click to Change</button>
				<p>Product :{this.state.product}</p>
				<p>Name :{this.state.name}</p>
				<img src={this.state.imageurl} />
			   </div>
		);}
}
export default ManageState;