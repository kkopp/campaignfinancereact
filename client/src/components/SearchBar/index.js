import React from "react";
import { MDBCol, MDBFormInline, MDBBtn, MDBContainer } from "mdbreact";

const SearchBar = () => {
  return (
    <MDBContainer>
    <MDBCol md="12">
      <MDBFormInline className=""md-form mr-auto>
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Type the name of a campaign..." aria-label="Search" />
        <MDBBtn gradient="near-moon" rounded size="md" type="submit" className="mr-auto">
          Search
        </MDBBtn>
      </MDBFormInline>
    </MDBCol>
    </MDBContainer>
  );
}

export default SearchBar;
