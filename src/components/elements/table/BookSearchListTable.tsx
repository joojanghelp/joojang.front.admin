import React from 'react';
import { searchBookInfoInterface } from 'modules/Interfaces';

interface initialProps {
    items: searchBookInfoInterface[];
    handleClickBookCreate: ( book_key: number ) => void;
}

function DefaultSearchListTable({items, handleClickBookCreate}: initialProps) {
    return (
        <>
            {/* <!-- Begin table --> */}
            {/* <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0"> */}
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>thumbnail</th>
                        <th>title</th>
                        <th>status</th>
                        <th>isbn</th>
                        <th>contents</th>
                        <th>authors</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>thumbnail</th>
                        <th>title</th>
                        <th>status</th>
                        <th>isbn</th>
                        <th>contents</th>
                        <th>authors</th>
                    </tr>
                </tfoot>
                <tbody>
                {items && items.map((item: searchBookInfoInterface, i:number) =>
                        <tr key={i}>
                            <td><img src={item.thumbnail} alt="thumbnail" onClick={() => handleClickBookCreate(i)}/></td>
                            <td>{item.title}</td>
                            <td>{item.status}</td>
                            <td>{item.isbn}</td>
                            <td>{item.contents}</td>
                            <td>{item.authors}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default DefaultSearchListTable;