import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules/redux';
import {attemptRecommendBookListAction, attemptDeleteRecommendBookAction } from 'modules/redux/pages';
import * as Interfaces from 'modules/Interfaces';
import { useParams } from 'react-router-dom';
import history from 'routes/History';

interface RouteParams {
    page_number: string;
    gubun: string;
}

export default function useRecommendBooksList() {

    const params = useParams<RouteParams>();
    const dispatch = useDispatch();

    const state_book_list = useSelector((state: RootState) => state.pages_state.books.recommend_book_list);
    const state_delete_recommend_book = useSelector((state: RootState) => state.pages_state.books.delete_recommend_book);
    const [booksListItems, setBooksListItems ] = useState<Interfaces.RecommendbookListItem[]>([]);
    const [listPageData, setlistPageData ] = useState<Interfaces.defaultPaginationData>({
        current_page: 0,
        from: 0,
        last_page: '',
        per_page: 0,
        prev_page_url: '',
        to: 0,
        total: 0,
        first_page: '',
        next_page: '',
        prev_page: '',
    });

    const [isLoading, setIsLoading] = useState<Interfaces.baseSagaStateType>('idle');

    const __handlePaginate = (e: any) => {
        const selected_page = e.selected + 1;
        history.push(process.env.PUBLIC_URL + `/books/activity/${params.gubun}/${selected_page}`);
    }

    const __handleClickDeleteButton = (book_id: number) => {
        dispatch(attemptDeleteRecommendBookAction({
            book_id: book_id
        }));
    }

    useEffect(() => {
        dispatch(attemptRecommendBookListAction({
            pageNumber: (params.page_number) ? params.page_number : '1',
            gubun: (params.gubun) ? params.gubun : 'B11000'
        }));
    // eslint-disable-next-line react-hooks/exhaustive-deps,
    }, []);

    useEffect(() => {
        dispatch(attemptRecommendBookListAction({
            pageNumber: (params.page_number) ? params.page_number : '1',
            gubun: (params.gubun) ? params.gubun : 'B11000'
        }));
    // eslint-disable-next-line react-hooks/exhaustive-deps,
    }, [params]);

    useEffect(() => {
        if(state_book_list.state === 'success' && typeof state_book_list.list !== undefined && state_book_list.list) {
            setBooksListItems(state_book_list.list.items);
            setlistPageData({
                current_page: state_book_list.list.current_page,
                from: state_book_list.list.from,
                last_page: state_book_list.list.last_page,
                per_page: state_book_list.list.per_page,
                prev_page_url: state_book_list.list.prev_page_url,
                to: state_book_list.list.to,
                total: state_book_list.list.total,
                first_page: state_book_list.list.first_page,
                next_page: state_book_list.list.next_page,
                prev_page: state_book_list.list.prev_page,
            });
        }
    }, [state_book_list])

    useEffect(() => {
        // console.debug(listPageData);
    }, [listPageData]);

    useEffect(() => {
        if(state_delete_recommend_book.state === "success") {
            dispatch(attemptRecommendBookListAction({
                pageNumber: (params.page_number) ? params.page_number : '1',
                gubun: (params.gubun) ? params.gubun : 'B11000'
            }));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps,
    }, [state_delete_recommend_book])


    useEffect(() => {

        async function loadingState() {
            await setIsLoading('loading');
        }

        async function idleState() {
            await setIsLoading('idle');
        }


        if(state_book_list.state === 'loading' || state_delete_recommend_book.state === 'loading') {
            loadingState()
        } else {
            idleState();
        }

    } ,[state_book_list.state, state_delete_recommend_book.state])

    return {
        booksListItems,
        __handlePaginate,
        listPageData,
        __handleClickDeleteButton,
        isLoading,
    };
};

