import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";

const TeamPage = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Denver Campaign Data Project
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Millions of dollars are contributed to candidates in Denver elections, but the city does not maintain a campaign-finance database that's easy to search. Rather, the city publishes Excel spreadsheets of this data. For our coding boot camp final project, we set out to create a website that makes it easy for voters to find information about campaign contributions and expenditures. Our goal is to help Denver voters make informed decisions.
          </p>
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <MDBAvatar
                tag="img"
                src="https://avatars2.githubusercontent.com/u/42563514?s=400"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Kristina Kopp"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Kristina Kopp</h5>
              <p className="text-uppercase blue-text">Web Developer</p>
              <p className="grey-text">
                University of Denver Women's Coding Boot Camp, graduated March 2019.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="https://github.com/kkopp" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
                </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <MDBAvatar
                tag="img"
                src="https://avatars1.githubusercontent.com/u/43078062?s=400"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Kristina Kopp"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Lisa Jones</h5>
              <p className="text-uppercase blue-text">Web Developer</p>
              <p className="grey-text">
                University of Denver Women's Coding Boot Camp, graduated March 2019.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="https://github.com/thatlisajones" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
                </ul>
            </MDBCol>

            
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
  );
}

export default About;