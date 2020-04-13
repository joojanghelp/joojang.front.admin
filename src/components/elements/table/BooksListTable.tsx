import React from 'react';
import * as Interfaces from 'modules/Interfaces';
import {LoadingSpinner, ImageComponent} from 'components/elements';

interface initialProps {
    isloading: Interfaces.baseSagaStateType;
    items: Interfaces.bookListItem[];
    handleClickRecommendAddButton: (book_id: number) => void;
    handleClickRecommendDeleteButton: (book_id: number) => void;
}

function BooksListTable({ isloading, items, handleClickRecommendAddButton, handleClickRecommendDeleteButton }: initialProps) {
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
                {isloading === 'loading'
                    ?
                    <tbody><tr><td colSpan={10}><div style={{ height: '10vh', display: 'flex', justifyContent: 'center', alignItems: 'center',}}><LoadingSpinner /></div></td></tr></tbody>
                    :
                    <tbody>
                    {
                        items && items.map((item: Interfaces.bookListItem, i:number) =>
                        <tr key={i}>
                            {/* <td><button type="button" className="btn btn-primary" onClick={() => handleClickRecommendAddButton(item.id)}>등록</button></td> */}
                            {
                                (function(){
                                    switch(item.recommend) {
                                        case true :
                                            return <td><button type="button" className="btn btn-danger btn-sm" onClick={() => handleClickRecommendDeleteButton(item.id)}>삭제</button></td>
                                        case false :
                                            return <td><button type="button" className="btn btn-primary btn-sm" onClick={() => handleClickRecommendAddButton(item.id)}>등록</button></td>
                                    }
                                })()
                            }
                            <td><ImageComponent image_url={item.thumbnail}/></td>
                            <td>{item.title}</td>
                            <td>{item.user_name}</td>
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

export default BooksListTable;