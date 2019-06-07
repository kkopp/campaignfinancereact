import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBContainer } from 'mdbreact';

const Card = () => {
  return (
      <MDBContainer>
    <MDBRow>
    <MDBCol size="4"> 
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Denver Campaign Fact</MDBCardTitle>
          <MDBCardText>
            blah blah blah...text goes here
          </MDBCardText>
          <MDBBtn href="#">Click Here</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>

      <MDBCol size="4"> 
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/44.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Denver Campaign Fact</MDBCardTitle>
          <MDBCardText>
            blah blah blah...text goes here
          </MDBCardText>
          <MDBBtn href="#">Click Here</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>

      <MDBCol size="4"> 
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/45.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Denver Campaign Fact</MDBCardTitle>
          <MDBCardText>
            blah blah blah...text goes here
          </MDBCardText>
          <MDBBtn href="#">Click Here</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </MDBRow>
    </MDBContainer>
  )
}

export default Card;