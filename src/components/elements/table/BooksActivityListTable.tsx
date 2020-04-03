import React from 'react';
import * as Interfaces from 'modules/Interfaces';
import {LoadingSpinner} from 'components/elements';

interface initialProps {
    isloading: Interfaces.baseSagaStateType;
    items: Interfaces.activityListItem[];
    handleClickActivityDeleteButton: ( list_uid: string ) => void;
}

function BooksActivityListTable({isloading, items, handleClickActivityDeleteButton}: initialProps) {
    return (
        <>
            {/* <!-- Begin table --> */}
            {/* <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0"> */}
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>thumbnail</th>
                        <th>책 제목</th>
                        <th>올린이사람</th>
                        <th>구분</th>
                        <th>내용</th>
                        <th>날짜</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>thumbnail</th>
                        <th>책 제목</th>
                        <th>올린이사람</th>
                        <th>구분</th>
                        <th>내용</th>
                        <th>날짜</th>
                        <th>삭제</th>
                    </tr>
                </tfoot>

                {isloading === 'loading'
                    ?
                    <tbody><tr><td colSpan={10}><div style={{ height: '10vh', display: 'flex', justifyContent: 'center', alignItems: 'center',}}><LoadingSpinner /></div></td></tr></tbody>
                    :
                    <tbody>
                    {
                        items && items.map((item: Interfaces.activityListItem, i:number) =>
                            <tr key={i}>
                                <td><img src={item.book_thumbnail} alt="thumbnail"/></td>
                                <td>{item.book_title}</td>
                                <td>{item.user_name}</td>
                                <td>{item.gubun_name}</td>
                                <td>{item.contents}</td>
                                <td>{item.created_at_string}</td>
                                <td><button type="button" className="btn btn-danger" onClick={() => handleClickActivityDeleteButton(item.list_uid)}>삭제</button></td>
                            </tr>
                        )
                    }
                    </tbody>
                }
            </table>
        </>
    );
}

export default BooksActivityListTable;