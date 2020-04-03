import React from 'react';

import {
    Sidebar,
    Topbar,
    Footer
} from 'components/elements';

function InfoSkeletonComponent(props: any) {
    return (
        <>
            <div id="wrapper">

                <Sidebar />

                {/* <!-- Content Wrapper --> */}
                <div id="content-wrapper" className="d-flex flex-column">

                    {/* <!-- Main Content --> */}
                    <div id="content">

                        <Topbar />

                        {/* <!-- Begin Page Content --> */}
                        <div className="container-fluid">

                            {/* <!-- Page Heading --> */}
                            <h1 className="h3 mb-2 text-gray-800">정보</h1>
                            <p className="mb-4"></p>

                            <div className="card shadow mb-4">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        {props.InfoTable}
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <!-- /.container-fluid --> */}

                    </div>
                    {/* <!-- End of Main Content --> */}

                    <Footer/>

                </div>
                {/* <!-- End of Content Wrapper --> */}

            </div>
            {/* <!-- End of Page Wrapper --> */}
        </>
    );
}

export default InfoSkeletonComponent;