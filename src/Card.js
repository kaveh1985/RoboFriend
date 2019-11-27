import React from 'react';

const Card = ({ name, email, id }) => {
    // we can also destructure within the prameter ()
     return (
	   <div className="tc bg-purple dib bw3 shadow-5 br4 pa3 ma2 grow">
	  <img alt="this is a pic" src={`https://robohash.org/${id}`}/>
	     <div>
     {/*these are empty skeleton that would fill up with the 
     CardList Values but in here they are only empty and undefined
   parameters untill we render the page in the cardlist and define
 the value from it to this page*/}
       	  <h2> {name}  </h2>
       		<p>  {email} </p>
         
		   </div>
	    </div>
       );
    }



export default Card;