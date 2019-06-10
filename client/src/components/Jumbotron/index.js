import React from 'react';
import { MDBJumbotron, MDBContainer } from 'mdbreact';

const Jumbotron = () => {
	return (
		<MDBContainer className="text-center mt-5 pt-5">
			<MDBJumbotron>
				<h2>Denver Campaign Finance Data Search</h2>
				<h5>Where does all the money go?</h5>
				<br />
				<p>
					Search here to find out where the campaign dollars are spent to help make you a more informed voter.
				</p>
			</MDBJumbotron>
		</MDBContainer>
	);
};

export default Jumbotron;
