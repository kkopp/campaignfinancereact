import React from "react";
import { MDBContainer } from "mdbreact";
import ExpendTable from "../components/ExpendTable";

function MayorExpend() {
	return (
		<MDBContainer>
            <div className="w-75 p-3">
                <h1>Mayoral Race Expenditures</h1>
            </div>
			<div>
				<ExpendTable />
			</div>
		</MDBContainer>
	);
}

export default MayorExpend;