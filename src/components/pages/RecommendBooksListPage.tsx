import React from 'react';
import {
    ListSkeletonComponent,
    RecommendBookListThumbnailType,
    Pagination,
} from 'components/elements';
import useRecommendBooksList from 'hook/useRecommendBooksList';

function RecommendBooksListPage() {

    const {
        booksListItems,
        __handlePaginate,
        listPageData,
        __handleClickDeleteButton,
        isLoading,
    } = useRecommendBooksList();

    return (
        <>
            <ListSkeletonComponent

                pageTitle={'책'}
                pageSubTitle={'추천 도서'}

                ListTable={
                    <RecommendBookListThumbnailType
                        isloading={isLoading}
                        items={booksListItems}
                        handleClickDeleteButton={__handleClickDeleteButton}
                    />
                }
                Pagination={
                    <Pagination
                        handlePaginate={__handlePaginate}
                        listpagedata={listPageData}
                    />
                }
            />
        </>
    );
}

export default RecommendBooksListPage;