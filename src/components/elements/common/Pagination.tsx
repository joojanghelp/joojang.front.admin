import React from 'react';
import _ from 'lodash';
import ReactPaginate from 'react-paginate';
import {defaultPaginationData} from 'modules/Interfaces';

interface initialProps  {
    handlePaginate: (e: any) => void;
    listpagedata: defaultPaginationData
};

function Pagination({
    handlePaginate,
    listpagedata
 } : initialProps) {

    // return (
    //     <>
    //         <div className="col-sm-12 col-md-7">
    //             <div className="dataTables_paginate paging_simple_numbers">
    //                 <ul className="pagination">
    //                     <li className="paginate_button page-item previous disabled"><a href="#" className="page-link">Previous</a></li>
    //                     <li className="paginate_button page-item active"><a href="#" className="page-link">1</a></li>
    //                     <li className="paginate_button page-item "><a href="#" className="page-link">2</a></li>
    //                     <li className="paginate_button page-item "><a href="#" className="page-link">3</a></li>
    //                     <li className="paginate_button page-item "><a href="#" className="page-link">4</a></li>
    //                     <li className="paginate_button page-item "><a href="#" className="page-link">5</a></li>
    //                     <li className="paginate_button page-item "><a href="#" className="page-link">6</a></li>
    //                     <li className="paginate_button page-item next" id="dataTable_next"><a href="#" className="page-link">Next</a></li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </>
    // );

    return (
        <>
            <div className="col-sm-12 col-md-7">
                <div className="dataTables_paginate paging_simple_numbers">
                        <ReactPaginate
                                previousLabel={'<'}
                                nextLabel={'>'}
                                breakLabel={'...'}
                                pageCount={Number(listpagedata.next_page)}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={handlePaginate}
                                breakClassName={'page-item'}
                                breakLinkClassName={'page-link'}
                                containerClassName={'pagination'}
                                pageClassName={'page-item'}
                                pageLinkClassName={'page-link'}
                                previousClassName={'page-item'}
                                previousLinkClassName={'page-link'}
                                nextClassName={'page-item'}
                                nextLinkClassName={'page-link'}
                                activeClassName={'active'}
                            />
                </div>
            </div>
        </>
    );
}

export default Pagination;