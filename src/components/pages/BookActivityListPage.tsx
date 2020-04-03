import React from 'react';
import {
    ListSkeletonComponent,
    BooksActivityListTable,
    Pagination
} from 'components/elements';
import useActivity from 'hook/useActivity';

function BookActivityListPage() {

    const {
        booksActivityListItems,
        listPageData,
        __handleClickActivityDeleteButton,
        __handlePaginate
    } = useActivity();

    return (
        <>
            <ListSkeletonComponent
                ListTable={
                    <BooksActivityListTable
                        items={booksActivityListItems}
                        handleClickActivityDeleteButton={__handleClickActivityDeleteButton}
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

export default BookActivityListPage;