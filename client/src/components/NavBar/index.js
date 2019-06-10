import React from 'react';
import {
	MDBContainer,
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavbarToggler,
	MDBCollapse,
	MDBNavItem,
	MDBNavLink,
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapse: false,
			isWideEnough: false
		};
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.setState({
			collapse: !this.state.collapse
		});
	}

	render() {
		const bgBlue = { backgroundColor: '#305796' };
		const container = { height: 50 };
		return (
			<div>
				<Router>
					<header>
						<MDBContainer style={container}>
						<MDBNavbar style={bgBlue} dark expand="md" scrolling fixed="top">
							<MDBNavbarBrand href="/">
								<strong>Denver Campaign Finance Data</strong>
							</MDBNavbarBrand>
							<MDBNavbarToggler onClick={this.onClick} />
							<MDBCollapse isOpen={this.state.collapse} navbar>
								<MDBNavbarNav right>
									<MDBNavItem active>
										<MDBNavLink to="#">Home</MDBNavLink>
									</MDBNavItem>
									<MDBNavItem>
										<MDBNavLink to="#">Resources</MDBNavLink>
									</MDBNavItem>
									<MDBNavItem>
										<MDBNavLink to="#">About Us</MDBNavLink>
									</MDBNavItem>
								</MDBNavbarNav>
							</MDBCollapse>
						</MDBNavbar>
						</MDBContainer>
					</header>
				</Router>
			</div>
		);
	}
}

export default NavBar;
