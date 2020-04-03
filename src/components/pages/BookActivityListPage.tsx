import React, {useEffect} from 'react';
import {
    ListSkeletonComponent,
    BooksActivityListTable,
    Pagination
} from 'components/elements';
import useActivity from 'hook/useActivity';
import GlobalAlert from 'lib/GlobalAlert';

function BookActivityListPage() {

    const {
        booksActivityListItems,
        listPageData,
        __handleClickActivityDeleteButton
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
            />
        </>
    );
}

export default BookActivityListPage;