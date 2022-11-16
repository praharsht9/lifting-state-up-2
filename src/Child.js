import React, { useState } from 'react';

const Child = (props) => {
	const [name, setName] = useState();
	function handleSubmit(e) {
		e.preventDefault();
		props.getData(name); // name is a parameter
	}
	return (
		<div>
			<h1>Child Page</h1>

			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>

				<button>Submit</button>
			</form>
		</div>
	);
};

export default Child;
