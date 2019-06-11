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

class NavBar extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind (this);
  }

  onClick () {
    this.setState ({
      collapse: !this.state.collapse,
    });
  }

  render () {
    const bgBlue = {backgroundColor: '#305796'};
    const container = {height: 50};
    return (
      <div>
        <header>
          <MDBContainer style={container}>
            <MDBNavbar style={bgBlue} dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand to="/">
                <strong>Denver Campaign Data Project</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/resources">Resources</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/quiz">Take Quiz</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/about">About Us</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </MDBContainer>
        </header>
      </div>
    );
  }
}

export default NavBar;
