import React from 'react';
import { Link } from 'react-router-dom';

import {
    Sidebar,
    Topbar,
    Footer
} from 'components/elements';

function ListSkeletonComponent(props: any) {
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
                            <h1 className="h3 mb-2 text-gray-800">회원</h1>
                            <p className="mb-4"></p>

                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">회원 리스트</h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        {props.ListTable}
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

export default ListSkeletonComponent;