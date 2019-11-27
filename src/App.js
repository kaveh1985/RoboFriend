import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
// import {robots} from './robots';
import './SearchBox.css';
import './Card.css';



class App extends React.Component {
   constructor(){
		super();
		this.state = {
	      robots: [],
	      searchfield: ''
         }
	  }

	  componentDidMount(){
	  	fetch('https://jsonplaceholder.typicode.com/users')
	  	.then(response => {
	  		return response.json();
	  	}).then(users => {
	  		this.setState({robots: users})
	  	})
	  }


	  onSearchChange = (event) => {
	  	this.setState({ searchfield: event.target.value })      
	    }


		render(){
			const filtredRobots = this.state.robots.filter(robot => {
	  		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	       })

		return (
			
			 <main className="tc">
					<h1>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
			        <CardList robots={filtredRobots}/>

			 </main>
		
			
		);
	  }
}



export default App;