import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules/redux';
import {attemptGetBooksListAction, attemptAddRecommendBookAction, attemptDeleteRecommendBookAction} from 'modules/redux/pages';
import * as Interfaces from 'modules/Interfaces';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

interface RouteParams {
    page_number: string;
}

export default function useBooksList() {

    const params = useParams<RouteParams>();
    const dispatch = useDispatch();

    const state_book_list = useSelector((state: RootState) => state.pages_state.books.book_list);
    const state_add_recommend_book = useSelector((state: RootState) => state.pages_state.books.add_recommend_book);
    const state_delete_recommend_book = useSelector((state: RootState) => state.pages_state.books.delete_recommend_book);
    const state_sitedata = useSelector((state: RootState) => state.sitedata);
    const [booksListItems, setBooksListItems ] = useState<Interfaces.bookListItem[]>([]);
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

    const __handlePaginate = () => {
        console.debug('__handlePaginate');
    }

    const __handleClickRecommendAddButton = async (book_id: number) => {

        const { value: gubun } = await Swal.fire({
            title: '카테고리 선택',
            input: 'select',
            inputOptions: (function(){
                return state_sitedata.code_list['B11'].map((code:any) => `${code.code_name}`);
            })(),
            inputPlaceholder: '카테고리',
            showCancelButton: true,
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value) {
                        resolve()
                    } else {
                        resolve('하나를 선택해 주세요 :)')
                    }
                })
            }
        })

        if (gubun) {
            const select_gubun = state_sitedata.code_list['B11'][gubun]['code_id'];
            dispatch(attemptAddRecommendBookAction({
                book_id: book_id,
                gubun: select_gubun
            }));
        }
    }

    const __handleClickRecommendDeleteButton = (book_id: number) => {
        dispatch(attemptDeleteRecommendBookAction({
            book_id: book_id
        }));
    }

    useEffect(() => {
        dispatch(attemptGetBooksListAction({
            pageNumber: (params.page_number) ? params.page_number : '1'
        }));
    // eslint-disable-next-line react-hooks/exhaustive-deps,
    }, []);

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
        if(state_add_recommend_book.state === "success" || state_delete_recommend_book.state === "success") {
            dispatch(attemptGetBooksListAction({
                pageNumber: (params.page_number) ? params.page_number : '1'
            }));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps,
    }, [state_add_recommend_book, state_delete_recommend_book])

    useEffect(() => {
        // console.debug(listPageData);
    }, [listPageData]);

    return {
        booksListItems,
        __handlePaginate,
        __handleClickRecommendAddButton,
        __handleClickRecommendDeleteButton,
        listPageData,


    };
};

