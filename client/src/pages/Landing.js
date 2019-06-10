import React from 'react';
import Jumbotron from '../components/Jumbotron';
import BackgroundImage from '../components/BackgroundImage';
import Card from '../components/Card';

function Landing() {
	return (
		<div>
			<BackgroundImage />
            <Jumbotron />
			<Card />
		</div>
	);
}

export default Landing;
