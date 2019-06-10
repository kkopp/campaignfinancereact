import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer } from "mdbreact";

const Resources = props => {
return (
<MDBContainer>
  <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
    <MDBCardHeader color="primary-color" tag="h3">
      Voter Resources
    </MDBCardHeader>
    <MDBCardBody>
      <MDBCardTitle>Learn More</MDBCardTitle>
      <MDBCardText>
        For the most recent information about Denver elections, please visit the city's official resource page.
      </MDBCardText>
      <a href="https://www.denvergov.org/content/denvergov/en/denver-elections-divison.html"><MDBBtn color="primary">go to denvergov</MDBBtn></a>
    </MDBCardBody>
  </MDBCard>
</MDBContainer>
);
};

export default Resources;