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
	MDBIcon
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapse: false
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
		const container = { height: 200 };
		return (
			<div>
				<Router>
					<header>
						<MDBNavbar style={bgBlue} dark expand="md" scrolling fixed="top">
							<MDBNavbarBrand href="/">
								<strong>Denver Campaign Finance Data</strong>
							</MDBNavbarBrand>
							<MDBNavbarToggler onClick={this.onClick} />
							<MDBCollapse isOpen={this.state.collapse} navbar>
								{/* <MDBNavbarNav left>
								</MDBNavbarNav> */}
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
					</header>
					<MDBContainer style={container} className="text-center mt-5 pt-5">
						<h2>Denver Campaign Finance Data Search</h2>
						<h5>Where does all the money go?</h5>
						<br />
						<p>
							Search here to find out where the campaign dollars are spent to help make you a more informed voter.
						</p>
					</MDBContainer>
				</Router>
			</div>
		);
	}
}

export default NavBar;
