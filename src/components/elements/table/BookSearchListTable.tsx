import React from 'react';
import * as Interfaces from 'modules/Interfaces';
import {LoadingSpinner} from 'components/elements';

interface initialProps {
    isloading: Interfaces.baseSagaStateType;
    items: Interfaces.searchBookInfoInterface[];
    handleClickBookCreate: ( book_key: number ) => void;
}

function DefaultSearchListTable({isloading, items, handleClickBookCreate}: initialProps) {
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
                {isloading === 'loading'
                    ?
                    <tbody><tr><td colSpan={10}><div style={{ height: '10vh', display: 'flex', justifyContent: 'center', alignItems: 'center',}}><LoadingSpinner /></div></td></tr></tbody>
                    :
                    <tbody>
                    {
                        items && items.map((item: Interfaces.searchBookInfoInterface, i:number) =>
                            <tr key={i}>
                                <td><img src={item.thumbnail} alt="thumbnail" onClick={() => handleClickBookCreate(i)}/></td>
                                <td>{item.title}</td>
                                <td>{item.status}</td>
                                <td>{item.isbn}</td>
                                <td>{item.contents}</td>
                                <td>{item.authors}</td>
                            </tr>
                        )
                    }
                    </tbody>
                }
            </table>
        </>
    );
}

export default DefaultSearchListTable;