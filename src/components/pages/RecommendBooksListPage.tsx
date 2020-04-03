import React from 'react';
import {
    ListSkeletonComponent,
    RecommendBooksListTable,
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

                ListTable={
                    <RecommendBooksListTable
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