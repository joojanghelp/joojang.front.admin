import React, {MouseEvent, KeyboardEvent} from 'react';

interface initialProps  {
    bookSearchString: string;
    handleBookSearchButtonClick: ( event: MouseEvent ) => void;
    handleBookSearchInputCange: ( event: string ) => void;
    handleEnterKeyPress: () => void;
};

function BookCreateForm({bookSearchString, handleBookSearchButtonClick, handleBookSearchInputCange, handleEnterKeyPress} : initialProps) {
    const onEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        // event.preventDefault();
        event.key === 'Enter' && handleEnterKeyPress();
    }

    return (
        <>
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    {/* <!-- Nested Row within Card Body --> */}
                    <div className="p-5">
                        <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">책검색</h1>
                        </div>
                        <form className="user">
                            <div className="form-group">
                                <input type="text" className="form-control form-control-user" id="exampleInputEmail" placeholder="검색어를 입력해 주세요."
                                    onChange={ e => handleBookSearchInputCange(e.target.value) }
                                    value={bookSearchString}
                                    onKeyPress={e => onEnter(e)}
                                />
                            </div>
                            <button type="button" className="btn btn-primary btn-lg btn-block"
                                onClick={(e: MouseEvent) => handleBookSearchButtonClick(e)}
                            >검색</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookCreateForm;