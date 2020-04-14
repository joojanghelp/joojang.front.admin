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
        __handlePaginate,
        isLoading,
    } = useActivity();

    return (
        <>
            <ListSkeletonComponent

                pageTitle={'회원'}
                pageSubTitle={'독서 활동 리스트'}

                ListTable={
                    <BooksActivityListTable
                        isloading={isLoading}
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