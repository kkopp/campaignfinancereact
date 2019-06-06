import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  const bgBlue = { backgroundColor: '#305796' };
  return (
    <MDBFooter style={bgBlue} className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} | Created by: Lisa and Kristina
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;