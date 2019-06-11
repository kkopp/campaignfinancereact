import React, {Component} from 'react';
import Flippy, {FrontSide, BackSide} from 'react-flippy';
import {MDBCol, MDBRow, MDBContainer, MDBIcon, MDBBtn} from 'mdbreact';

export default class Card extends Component {
  render () {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol size="4">
            <Flippy
              flipOnHover={false} // default false
              flipOnClick={true} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
              style={{width: '22rem', height: '18rem'}} /// these are optional style, it is not necessary
            >
              <FrontSide
                style={{
                  backgroundColor: '#41669d',
                  color: 'white',
                }}
                className="text-center"
              >
                <h1>Campaign Contributions</h1>
                <MDBIcon
                  icon="hand-holding-usd"
                  size="5x"
                  className="white-text m-4"
                />
              </FrontSide>
              <BackSide
                style={{backgroundColor: '#175852', color: 'white'}}
                className="text-center"
              >
                <p>
                  A campaign contribution is a gift, loan, pledge or advance of money; guarantee or endorsement of a loan; or letter of credit or line of credit made by any person for the purpose of influencing any election.
                </p>
				<div className="fixed-bottom" style={{ marginBottom: "1rem" }}>
                <a href="/contributions"><MDBBtn color="indigo"><MDBIcon icon="arrow-right" size="2x" /></MDBBtn></a>
				</div>
              </BackSide>
            </Flippy>
          </MDBCol>

          <MDBCol size="4">
            <Flippy
              flipOnHover={false} // default false
              flipOnClick={true} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
              style={{width: '22rem', height: '18rem'}} /// these are optional style, it is not necessary
            >
              <FrontSide
                style={{
                  backgroundColor: '#41669d',
                  color: 'white',
                }}
                className="text-center"
              >
                <h1>Campaign Expenditures</h1>
                <MDBIcon
                  icon="money-check"
                  size="5x"
                  className="white-text m-4"
                />
              </FrontSide>
              <BackSide
                style={{backgroundColor: '#175852', color: 'white'}}
                className="text-center"
              >
                <p>
                  A campaign expenditure is the purchase, payment, distribution, loan, advance, deposit or gift of money or anything of value, made by any person for the purpose of influencing an election.
                </p>
				<div className="fixed-bottom" style={{ marginBottom: "1rem" }}>
                <a href="/expenditures"><MDBBtn color="indigo"><MDBIcon icon="arrow-right" size="2x" /></MDBBtn></a>
				</div>
              </BackSide>
            </Flippy>
          </MDBCol>

          <MDBCol size="4">
            <Flippy
              flipOnHover={false} // default false
              flipOnClick={true} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
              style={{width: '22rem', height: '18rem'}} /// these are optional style, it is not necessary
            >
              <FrontSide
                style={{
                  backgroundColor: '#41669d',
                  color: 'white',
                }}
                className="text-center"
              >
                <h1>In-Kind Contributions</h1>
                <MDBIcon icon="gift" size="5x" className="white-text m-4" />
              </FrontSide>
              <BackSide
                style={{backgroundColor: '#175852', color: 'white'}}
                className="text-center"
              >
                <p>A contribution in-kind is a gift or loan of any item of real or personal property, or any other thing of value, but not including money, made to or for any candidate or committee for the purpose of influencing an election or for the purpose of disseminating newsletters related to the scope of duties of an incumbent.</p>
				<div className="fixed-bottom" style={{ marginBottom: "1rem" }}>
                <a href="/inkind"><MDBBtn color="indigo"><MDBIcon icon="arrow-right" size="2x" /></MDBBtn></a>
				</div>
              </BackSide>
            </Flippy>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
