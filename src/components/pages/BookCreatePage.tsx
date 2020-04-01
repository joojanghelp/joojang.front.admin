import React from 'react';
import { SearchSkeletonComponent, BookCreateForm, BookSearchListTable } from 'components/elements';
import useBookCreate from 'hook/useBookCreate';


function BookCreatePage() {

    const {
        __handleBookSearchButtonClick,
        __handleBookSearchInputCange,
        bookSearchResultItem,
        __handleClickBookServerCreate,
    } = useBookCreate();
    return (
        <>
            <SearchSkeletonComponent
                SearchTable={
                    <>
                        <BookCreateForm
                            handleBookSearchButtonClick={__handleBookSearchButtonClick}
                            handleBookSearchInputCange={__handleBookSearchInputCange}
                        />
                    </>
                }
                ListTable={
                    <>
                        <BookSearchListTable
                            items={bookSearchResultItem}
                            handleClickBookCreate={__handleClickBookServerCreate}
                        />
                    </>
                }
            />
        </>
    );
}

export default BookCreatePage;