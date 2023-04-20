import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentTotales from './ContentTotales';
import Chart from './Chart';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0  font-weight-bold text-dark">Pet Market </h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentTotales />
					<ContentRowCenter />
					<Chart />
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;