import React from 'react';
import {
    ListSkeletonComponent,
    BookListThumbnailType,
    Pagination
} from 'components/elements';
import useBooksList from 'hook/useBooksList';

function BooksListPage() {

    const {
        booksListItems,
        __handlePaginate,
        __handleClickRecommendAddButton,
        __handleClickRecommendDeleteButton,
        listPageData,
        isLoading,
    } = useBooksList();

    return (
        <>
            <ListSkeletonComponent
                ListTable={
                    <BookListThumbnailType
                        isloading={isLoading}
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