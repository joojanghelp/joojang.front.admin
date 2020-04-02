import React from 'react';
import * as Interfaces from 'modules/Interfaces';

interface initialProps {
    items: Interfaces.RecommendbookListItem[];
    handleClickDeleteButton: ( book_id: number ) => void;
}

function RecommendBooksListTable({ items, handleClickDeleteButton }: initialProps) {
    return (
        <>
            {/* <!-- Begin table --> */}
            {/* <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0"> */}
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>thumbnail</th>
                        <th>title</th>
                        <th>올린이사람</th>
                        <th>contents</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>thumbnail</th>
                        <th>title</th>
                        <th>status</th>
                        <th>contents</th>
                        <th>삭제</th>
                    </tr>
                </tfoot>
                <tbody>
                {items && items.map((item: Interfaces.RecommendbookListItem, i:number) =>
                        <tr key={i}>
                            <td>{item.book_thumbnail && <img src={item.book_thumbnail} alt="thumbnail" />}</td>
                            <td>{item.book_title}</td>
                            <td>{item.book_user_name}</td>
                            <td>{item.book_contents}</td>
                            <td><button type="button" className="btn btn-danger" onClick={() => handleClickDeleteButton(item.book_id)}>삭제</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default RecommendBooksListTable;