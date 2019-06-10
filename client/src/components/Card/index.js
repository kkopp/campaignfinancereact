import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { MDBCol, MDBRow, MDBContainer, MDBIcon } from 'mdbreact';

export default class Card extends Component {
	render() {
		return (
			<MDBContainer>
				<MDBRow>
					<MDBCol size="4">
						<Flippy
							flipOnHover={false} // default false
							flipOnClick={true} // default false
							flipDirection="horizontal" // horizontal or vertical
							ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
							// if you pass isFlipped prop component will be controlled component.
							// and other props, which will go to div
							style={{ width: '22rem', height: '22rem' }} /// these are optional style, it is not necessary
						>
							<FrontSide
								style={{
									backgroundColor: '#41669d'
								}}
							>
								<h1>Campaign Contributions</h1>
								<MDBIcon icon="hand-holding-usd" size="5x" className="white-text m-4" />
							</FrontSide>
							<BackSide style={{ backgroundColor: '#175852' }}>What are Campaign Contributions?</BackSide>
						</Flippy>
					</MDBCol>

					<MDBCol size="4">
						<Flippy
							flipOnHover={false} // default false
							flipOnClick={true} // default false
							flipDirection="horizontal" // horizontal or vertical
							ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
							// if you pass isFlipped prop component will be controlled component.
							// and other props, which will go to div
							style={{ width: '22rem', height: '22rem' }} /// these are optional style, it is not necessary
						>
							<FrontSide
								style={{
									backgroundColor: '#41669d'
								}}
							>
								<h1>Campaign Expenditures</h1>
								<MDBIcon icon="money-check" size="5x" className="white-text m-4" />
							</FrontSide>
							<BackSide style={{ backgroundColor: '#175852' }}>What are Campaign Expenditures?</BackSide>
						</Flippy>
					</MDBCol>

					<MDBCol size="4">
						<Flippy
							flipOnHover={false} // default false
							flipOnClick={true} // default false
							flipDirection="horizontal" // horizontal or vertical
							ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
							// if you pass isFlipped prop component will be controlled component.
							// and other props, which will go to div
							style={{ width: '22rem', height: '22rem' }} /// these are optional style, it is not necessary
						>
							<FrontSide
								style={{
									backgroundColor: '#41669d'
								}}
							>
								<h1>In Kind Contributions</h1>
								<MDBIcon icon="gift" size="5x" className="white-text m-4" />
							</FrontSide>
							<BackSide style={{ backgroundColor: '#175852' }}>What are In Kind Contributions?</BackSide>
						</Flippy>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		);
	}
}
