import React from 'react';
import { MDBJumbotron, MDBContainer } from 'mdbreact';

const Jumbotron = () => {
	return (
		<MDBContainer className="text-center mt-5 pt-5">
			<MDBJumbotron>
				<h1>2019 Race for Denver Mayor</h1>
				<h3>Campaign Contributions and Expenditures</h3>
				<br />
				<h5>
					Choose a data set below to see contributions and expenditures reported as of June 7, 2019. 
				</h5>
			</MDBJumbotron>
		</MDBContainer>
	);
};

export default Jumbotron;
