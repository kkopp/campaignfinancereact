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
									backgroundColor: '#41669d', color: 'white'
								}}
							>
								<h1>Campaign Contributions</h1>
								<MDBIcon icon="hand-holding-usd" size="5x" className="white-text m-4" />
							</FrontSide>
							<BackSide style={{ backgroundColor: '#175852', color: 'white' }}>A campaign contribution is a gift, loan, pledge or advance of money; guarantee or endorsement of a loan; or letter of credit or line of credit made by any person for the purpose of influencing any election.</BackSide>
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
									backgroundColor: '#41669d', color: 'white'
								}}
							>
								<h1>Campaign Expenditures</h1>
								<MDBIcon icon="money-check" size="5x" className="white-text m-4" />
							</FrontSide>
							<BackSide style={{ backgroundColor: '#175852', color: 'white' }}>A campaign expenditure is the purchase, payment, distribution, loan, advance, deposit or gift of money or anything of value, made by any person for the purpose of influencing an election.</BackSide>
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
									backgroundColor: '#41669d', color: 'white'
								}}
							>
								<h1>In-Kind Contributions</h1>
								<MDBIcon icon="gift" size="5x" className="white-text m-4" />
							</FrontSide>
							<BackSide style={{ backgroundColor: '#175852', color: 'white' }}>A contribution in-kind is a gift or loan of any item of real or personal property, or any other thing of value, but not including money, made to or for any candidate or committee for the purpose of influencing an election or for the purpose of disseminating newsletters related to the scope of duties of an incumbent.</BackSide>
						</Flippy>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		);
	}
}
