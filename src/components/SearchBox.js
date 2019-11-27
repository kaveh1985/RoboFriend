import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<div className="pa2">
		<input id="inp"
		  className="pa3 br3 ba b--black bg-lightest-blue"
		  type='search' 
		  placeholder='search robots'
		  onChange={searchChange}
		 />
		 </div>
		);
     }



export default SearchBox;