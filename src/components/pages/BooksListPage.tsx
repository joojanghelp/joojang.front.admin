import React, {useEffect} from 'react';
import {
    ListSkeletonComponent,
    BooksListTable,
    Pagination
} from 'components/elements';
import useBooksList from 'hook/useBooksList';
import GlobalAlert from 'lib/GlobalAlert';

function BooksListPage() {

    const {
        booksListItems,
        __handlePaginate,
        __handleClickRecommendAddButton,
        __handleClickRecommendDeleteButton,
        listPageData,
    } = useBooksList();

    return (
        <>
            <ListSkeletonComponent
                ListTable={
                    <BooksListTable
                        items={booksListItems}
                        handleClickRecommendAddButton={__handleClickRecommendAddButton}
                        handleClickRecommendDeleteButton={__handleClickRecommendDeleteButton}
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

export default BooksListPage;