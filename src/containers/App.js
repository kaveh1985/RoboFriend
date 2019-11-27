import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import {robots} from './robots';
import '../components/SearchBox.css';
import '../components/Card.css';
import '../components/Scroll.css';


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
	  	.then(response => response.json())
	  	.then(users => this.setState({robots: users}))
	  }


	  onSearchChange = (event) => {
	  	this.setState({ searchfield: event.target.value })      
	    }


		render() {
			const filtredRobots = this.state.robots.filter(robot => {
	  		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	       })
			if(this.state.robots.length === 0) {
				return <h1 className="tc pink">LOADING</h1>
			} else {		
		return (
			
			  <main className="tc">
					<h1>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
			            <CardList robots={filtredRobots}/>
			        </Scroll>
			  </main>
		
		    );
		 }
   	  }
  }



export default App;