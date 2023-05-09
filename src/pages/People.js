import React, {useEffect, useState} from 'react'

import './People.css'
		  
function People() {
	
	const [people, setPeople] = useState([]);



	const URL = 'https://people-api-qn7s.onrender.com/people/'
	
	useEffect(() => {
		// useeffect will render once when the compon is mounted.
    	// if array dep. is left empty, it will only execute it's code once. 
		console.log('UseEffect ran');
		const fetchPeople = async () => {
			try {
				let responseData = await fetch(URL);
				let allPeople = await responseData.json();
				console.log(allPeople);
			} catch (error) {

			}
		}
	},[])

    return (
		<div className='people'>
			<h2>All The People </h2>
			{/* render the people */}

		</div>
	)
}
		  
export default People
		  