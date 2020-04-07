import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules/redux';
import { attemptGetBookActivityListAction, attemptDeleteBookActivityAction } from 'modules/redux/pages';
import * as Interfaces from 'modules/Interfaces';
import history from 'routes/History';
import { useParams } from 'react-router-dom';

interface RouteParams {
    page_number: string;
    gubun: string;
}

export default function useBookCreate() {

    const params = useParams<RouteParams>();
    const dispatch = useDispatch();

    const state_book_activity_list = useSelector((state: RootState) => state.pages_state.books.book_activity_list);
    const dtate_delete_book_activity = useSelector((state: RootState) => state.pages_state.books.delete_book_activity);
    const [booksActivityListItems, setBooksActivityListItems ] = useState<Interfaces.activityListItem[]>([]);
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

    const __handleClickActivityDeleteButton = (list_uid : string) => {
        dispatch(attemptDeleteBookActivityAction({
            activity_uuid:list_uid
        }));
    }

    const __handlePaginate = (e: any) => {
        const selected_page = e.selected + 1;
        history.push(process.env.PUBLIC_URL + `/books/activity/${params.gubun}/${selected_page}`);
    }

    useEffect(() => {
        if(dtate_delete_book_activity.state === "success" && params.page_number && params.gubun) {
            dispatch(attemptGetBookActivityListAction({
                pageNumber: (params.page_number) ? params.page_number : '1',
                gubun: (params.gubun) ? params.gubun : 'C11110'
            }));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps,
    }, [dtate_delete_book_activity.state])

    useEffect(() => {
        if(state_book_activity_list.state === 'success' && typeof state_book_activity_list.list !== undefined && state_book_activity_list.list) {
            setBooksActivityListItems(state_book_activity_list.list.items);
            setlistPageData({
                current_page: state_book_activity_list.list.current_page,
                from: state_book_activity_list.list.from,
                last_page: state_book_activity_list.list.last_page,
                per_page: state_book_activity_list.list.per_page,
                prev_page_url: state_book_activity_list.list.prev_page_url,
                to: state_book_activity_list.list.to,
                total: state_book_activity_list.list.total,
                first_page: state_book_activity_list.list.first_page,
                next_page: state_book_activity_list.list.next_page,
                prev_page: state_book_activity_list.list.prev_page,
            });
        }
    }, [state_book_activity_list])


    useEffect(() => {
        dispatch(attemptGetBookActivityListAction({
            pageNumber: (params.page_number) ? params.page_number : '1',
            gubun: (params.gubun) ? params.gubun : 'C11110'
        }));
    // eslint-disable-next-line react-hooks/exhaustive-deps,
    }, []);

    useEffect(() => {
        dispatch(attemptGetBookActivityListAction({
            pageNumber: (params.page_number) ? params.page_number : '1',
            gubun: (params.gubun) ? params.gubun : 'C11110'
        }));
    // eslint-disable-next-line react-hooks/exhaustive-deps,
    }, [params]);


    useEffect(() => {

        async function loadingState() {
            await setIsLoading('loading');
        }

        async function idleState() {
            await setIsLoading('idle');
        }


        if(state_book_activity_list.state === 'loading' || dtate_delete_book_activity.state === 'loading') {
            loadingState()
        } else {
            idleState();
        }

    } ,[state_book_activity_list.state, dtate_delete_book_activity.state])


    return {
        booksActivityListItems,
        listPageData,
        __handleClickActivityDeleteButton,
        __handlePaginate,
        isLoading,
    };
};

