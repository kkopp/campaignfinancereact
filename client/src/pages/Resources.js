import React from 'react';
import { MDBCard, MDBCardBody, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer, MDBRow, MDBCol } from 'mdbreact';

const Resources = () => {
	return (
		<MDBContainer className="text-center">
			<MDBRow>
				<MDBCol size="3">
					<MDBCard
						style={{
							width: '17rem',
							height: '20rem',
							marginTop: '3rem',
							marginBottom: '1rem'
						}}
					>
						<MDBCardHeader
							tag="h3"
							style={{
								backgroundColor: '#305796',
								color: 'white'
							}}
						>
							Denver.gov
						</MDBCardHeader>
						<MDBCardBody>
							<MDBCardText>
								The most recent information about Denver elections, direct from the city's official
								resource page.
							</MDBCardText>
						</MDBCardBody>
						<div className="sticky-bottom" style={{ marginBottom: '1rem' }}>
							<a href="https://www.denvergov.org/content/denvergov/en/denver-elections-divison.html">
								<MDBBtn color="default">Learn More</MDBBtn>
							</a>
						</div>
					</MDBCard>
				</MDBCol>

				<MDBCol size="3">
					<MDBCard
						style={{
							width: '17rem',
							height: '20rem',
							marginTop: '3rem',
							marginBottom: '1rem'
						}}
					>
						<MDBCardHeader
							tag="h3"
							style={{
								backgroundColor: '#305796',
								color: 'white'
							}}
						>
							Follow The Money
						</MDBCardHeader>
						<MDBCardBody>
							<MDBCardText>
								See comprehensive 50-state campaign contributions, independent spending, and lobbying
								details for candidates, political parties and ballot measures.
							</MDBCardText>
						</MDBCardBody>
						<div className="sticky-bottom" style={{ marginBottom: '1rem' }}>
							<a href="https://www.followthemoney.org/">
								<MDBBtn color="default">Learn More</MDBBtn>
							</a>
						</div>
					</MDBCard>
				</MDBCol>

				<MDBCol size="3">
					<MDBCard
						style={{
							width: '17rem',
							height: '20rem',
							marginTop: '3rem',
							marginBottom: '1rem'
						}}
					>
						<MDBCardHeader
							tag="h3"
							style={{
								backgroundColor: '#305796',
								color: 'white'
							}}
						>
							Open Secrets
						</MDBCardHeader>
						<MDBCardBody>
							<MDBCardText>
								A comprehensive resource for federal campaign contributions, lobbying data and analysis
								information.
							</MDBCardText>
						</MDBCardBody>
						<div className="sticky-bottom" style={{ marginBottom: '1rem' }}>
							<a href="https://www.opensecrets.org/">
								<MDBBtn color="default">Learn More</MDBBtn>
							</a>
						</div>
					</MDBCard>
				</MDBCol>

				<MDBCol size="3">
					<MDBCard
						style={{
							width: '17rem',
							height: '20rem',
							marginTop: '3rem',
							marginBottom: '1rem'
						}}
					>
						<MDBCardHeader
							tag="h3"
							style={{
								backgroundColor: '#305796',
								color: 'white'
							}}
						>
							TRACER
						</MDBCardHeader>
						<MDBCardBody>
							<MDBCardText>
								A public disclosure website for campaign finance in Colorado (maintained by the
								Secretary of State's Office)
							</MDBCardText>
						</MDBCardBody>
						<div className="sticky-bottom" style={{ marginBottom: '1rem' }}>
							<a href="http://tracer.sos.colorado.gov/PublicSite/homepage.aspx">
								<MDBBtn color="default">Learn More</MDBBtn>
							</a>
						</div>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};

export default Resources;
