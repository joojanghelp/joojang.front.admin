import React from 'react';
import * as Interfaces from 'modules/Interfaces';

interface initialProps {
    items: Interfaces.bookListItem[];
    handleClickRecommendAddButton: (book_id: number) => void;
    handleClickRecommendDeleteButton: (book_id: number) => void;
}

function BooksListTable({ items, handleClickRecommendAddButton, handleClickRecommendDeleteButton }: initialProps) {
    return (
        <>
            {/* <!-- Begin table --> */}
            {/* <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0"> */}
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>추천등록</th>
                        <th>thumbnail</th>
                        <th>title</th>
                        <th>올린이사람</th>
                        <th>isbn</th>
                        <th>contents</th>
                        <th>authors</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>추천등록</th>
                        <th>thumbnail</th>
                        <th>title</th>
                        <th>status</th>
                        <th>isbn</th>
                        <th>contents</th>
                        <th>authors</th>
                    </tr>
                </tfoot>
                <tbody>
                {items && items.map((item: Interfaces.bookListItem, i:number) =>
                        <tr key={i}>
                            {/* <td><button type="button" className="btn btn-primary" onClick={() => handleClickRecommendAddButton(item.id)}>등록</button></td> */}
                            {
                                (function(){
                                    switch(item.recommend) {
                                        case true :
                                            return <td><button type="button" className="btn btn-danger" onClick={() => handleClickRecommendDeleteButton(item.id)}>삭제</button></td>
                                        case false :
                                            return <td><button type="button" className="btn btn-primary" onClick={() => handleClickRecommendAddButton(item.id)}>등록</button></td>
                                    }
                                })()
                            }
                            <td>{item.thumbnail && <img src={item.thumbnail} alt="thumbnail" />}</td>
                            <td>{item.title}</td>
                            <td>{item.user_name}</td>
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

export default BooksListTable;