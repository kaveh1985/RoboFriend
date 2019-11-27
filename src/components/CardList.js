import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
		return(
			<div> 

			{ robots.map((user, i) => {			
			return( 
				 <Card 
				 /*these values that we are getting out of the loop
				 are going to be replaced to the parameters we defined 
				 to our Card page because Card parmaeters are wating for these 
				 values*/
					key={i}
					id={robots[i].id} 
					name={robots[i].name} 
					email={robots[i].email}
				  />
			       );
				}) }

		  </div>
   );
}

export default CardList;