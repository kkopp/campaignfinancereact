import React from "react";
import { MDBContainer } from "mdbreact";
import InKindTable from "../components/InKindTable";

function MayorInKind() {
	return (
		<MDBContainer>
            <div className="w-75 p-3">
                <h1>In Kind Contributions to the Mayoral Race</h1>
            </div>
			<div>
				<InKindTable />
			</div>
		</MDBContainer>
	);
}

export default MayorInKind;