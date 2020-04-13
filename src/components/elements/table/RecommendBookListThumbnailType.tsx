import React from 'react';
import styled from 'styled-components';

import * as Interfaces from 'modules/Interfaces';
import {LoadingSpinner, ImageComponent} from 'components/elements';

interface initialProps {
    isloading: Interfaces.baseSagaStateType;
    items: Interfaces.RecommendbookListItem[];
    handleClickDeleteButton: ( book_id: number ) => void;
}

const BookTitle = styled.div`
  font-size: 13px;
  padding: 1px 1px 2px 2px;
`;

const BookCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid #e3e6f0;
    border-radius: 0.35rem;
    height: 230px;
`;

function RecommendBookListThumbnailType({ isloading,items, handleClickDeleteButton }: initialProps) {
    return (
        <>
            <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
                    {isloading === 'loading'
                    ?
                        <div className="card">
                            <div style={{ height: '10vh', display: 'flex', justifyContent: 'center', alignItems: 'center',}}><LoadingSpinner /></div>
                        </div>
                    :
                    <>
                    {items && items.map((item: Interfaces.RecommendbookListItem, i:number) =>

                            <div className="col mb-4">
                                <BookCard>
                                    <div className="card-text text-center"><ImageComponent image_url={item.book_thumbnail}/></div>
                                    <div className="card-body">
                                        <BookTitle>{item.book_title}</BookTitle>
                                    </div>
                                    <button type="button" className="btn btn-danger btn-sm" onClick={() => handleClickDeleteButton(item.book_id)}>삭제</button>
                                </BookCard>
                            </div>
                        )
                    }
                    </>
                }
                </div>
            </div>
        </>
    );
}

export default RecommendBookListThumbnailType;