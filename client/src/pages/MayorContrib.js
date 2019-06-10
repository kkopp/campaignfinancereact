import React from 'react';
import { MDBContainer } from "mdbreact";
import ContribTable from '../components/ContribTable';


function MayorContrib() {
	return (
		<MDBContainer>
            <div className="w-75 p-3">
                <h1>Contributions to Mayoral Race</h1>
            </div>
			<div>
				<ContribTable />
			</div>
		</MDBContainer>
	);
}

export default MayorContrib;
