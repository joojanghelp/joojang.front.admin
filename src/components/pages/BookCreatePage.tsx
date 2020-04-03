import React from 'react';
import { SearchSkeletonComponent, BookCreateForm, BookSearchListTable } from 'components/elements';
import useBookCreate from 'hook/useBookCreate';


function BookCreatePage() {

    const {
        __handleBookSearchButtonClick,
        __handleBookSearchInputCange,
        bookSearchResultItem,
        __handleClickBookServerCreate,
        bookSearchString,
        isLoading,
    } = useBookCreate();
    return (
        <>
            <SearchSkeletonComponent
                SearchTable={
                    <>
                        <BookCreateForm
                            handleBookSearchButtonClick={__handleBookSearchButtonClick}
                            handleBookSearchInputCange={__handleBookSearchInputCange}
                            bookSearchString={bookSearchString}
                        />
                    </>
                }
                ListTable={
                    <>
                        <BookSearchListTable
                            isloading={isLoading}
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