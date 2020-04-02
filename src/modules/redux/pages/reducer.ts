import { ActionType } from 'modules/ActionType';
import { createReducer } from "typesafe-actions";
import { PageState } from './types';
import * as Interfaces from 'modules/Interfaces';

type Action<T> = {
    type: ActionType;
    payload: T;
}

const initialState: PageState = {
    users: {
        user_list: {
            state: 'idle',
        },
        user_info: {
            state: 'idle',
        },
        user_data_update : {
            state: 'idle',
        },
        user_active_update : {
            state: 'idle',
        },
    },
    books:{
        book_create : {
            state: 'idle',
        },
        book_list : {
            state: 'idle',
        },
        recommend_book_list : {
            state: 'idle',
        },
        delete_recommend_book : {
            state: 'idle',
        },
        add_recommend_book : {
            state: 'idle',
        },
    }
}

export const pagesActionReducer = createReducer<PageState>(initialState, {
    [ActionType.GET_USER_LIST_REQUEST](state: PageState) {
        return {
            ...state,
            users: {
                user_list: {
                    state: 'loading',
                },
                user_info: state.users.user_info,
                user_data_update: state.users.user_data_update,
                user_active_update : state.users.user_active_update,
            },
            // books: state.books
        }
    },
    [ActionType.GET_USER_LIST_SUCCESS](state: PageState, action: Action<Interfaces.listTypeServerResponse>) {
        return {
            ...state,
            users: {
                user_list: {
                    state: 'success',
                    list: action.payload
                },
                user_info: state.users.user_info,
                user_data_update: state.users.user_data_update,
                user_active_update : state.users.user_active_update,
            },
            // books: state.books
        };
    },
    [ActionType.GET_USER_LIST_ERROR](state: PageState, action: Action<Interfaces.listTypeServerResponse>) {
        return {
            ...state,
            users: {
                user_list: {
                    state: 'failure',
                },
                user_info: state.users.user_info,
                user_data_update: state.users.user_data_update,
                user_active_update : state.users.user_active_update,
            },
            // books: state.books
        };
    },

    [ActionType.GET_USER_INFO_REQUEST](state: PageState) {
        return {
            ...state,
            users: {
                user_list: state.users.user_list,
                user_info: {
                    state: 'loading',
                },
                user_data_update: state.users.user_data_update,
                user_active_update : state.users.user_active_update,
            },
            // books: state.books
        };
    },
    [ActionType.GET_USER_INFO_SUCCESS](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            users: {
                user_list: state.users.user_list,
                user_info: {
                    state: 'success',
                    data: action.payload
                },
                user_data_update: state.users.user_data_update,
                user_active_update : state.users.user_active_update,
            },
            // books: state.books
        };
    },
    [ActionType.GET_USER_INFO_ERROR](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            users: {
                user_list: state.users.user_list,
                user_info: {
                    state: 'failure',
                },
                user_data_update: state.users.user_data_update,
                user_active_update : state.users.user_active_update,
            },
            // books: state.books
        };
    },
    [ActionType.USER_DATA_UPDATE_SUCCESS](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            users: {
                user_list: state.users.user_list,
                user_info: state.users.user_info,
                user_data_update: {
                    state: 'success',
                },
                user_active_update : state.users.user_active_update,
            },
            // books: state.books
        };
    },
    [ActionType.USER_DATA_UPDATE_ERROR](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            users: {
                user_list: state.users.user_list,
                user_info: state.users.user_info,
                user_data_update: {
                    state: 'failure',
                },
                user_active_update : state.users.user_active_update,
            },
            // books: state.books
        };
    },
    [ActionType.USER_ACTIVE_UPDATE_REQUEST](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            users: {
                user_list: state.users.user_list,
                user_info: state.users.user_info,
                user_data_update: state.users.user_info,
                user_active_update : {
                    state: 'loading'
                },
            },
            // books: state.books
        };
    },
    [ActionType.USER_ACTIVE_UPDATE_SUCCESS](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            users: {
                user_list: state.users.user_list,
                user_info: state.users.user_info,
                user_data_update: state.users.user_info,
                user_active_update : {
                    state: 'success'
                },
            },
            // books: state.books
        };
    },
    [ActionType.USER_ACTIVE_UPDATE_ERROR](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            users: {
                user_list: state.users.user_list,
                user_info: state.users.user_info,
                user_data_update: state.users.user_data_update,
                user_active_update : {
                    state: 'failure'
                },
            },
            // books: state.books
        };
    },
    [ActionType.BOOK_CREATE_REQUEST](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            // users: state.users,
            books: {
                book_create : {
                    state: 'loading'
                },
                book_list : state.books.book_list,
                recommend_book_list : state.books.recommend_book_list,
                delete_recommend_book : state.books.delete_recommend_book,
                add_recommend_book : state.books.add_recommend_book,
            }
        };
    },
    [ActionType.BOOK_CREATE_SUCCESS](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            // users: state.users,
            books: {
                book_create : {
                    state: 'success',
                    info: action.payload.data
                },
                book_list : state.books.book_list,
                recommend_book_list : state.books.recommend_book_list,
                delete_recommend_book : state.books.delete_recommend_book,
                add_recommend_book : state.books.add_recommend_book,
            }
        };
    },
    [ActionType.BOOK_CREATE_ERROR](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            users: state.users,
            books: {
                book_create : {
                    state: 'failure'
                },
                book_list : state.books.book_list,
                recommend_book_list : state.books.recommend_book_list,
                delete_recommend_book : state.books.delete_recommend_book,
                add_recommend_book : state.books.add_recommend_book,
            }
        };
    },
    [ActionType.GET_BOOKS_LIST_REQUEST](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            // users: state.users,
            books: {
                book_create : state.books.book_create,
                book_list : {
                    state: 'loading'
                },
                recommend_book_list : state.books.recommend_book_list,
                delete_recommend_book : state.books.delete_recommend_book,
                add_recommend_book : state.books.add_recommend_book,
            }
        };
    },
    [ActionType.GET_BOOKS_LIST_SUCCESS](state: PageState, action: Action<Interfaces.booklistTypeServerResponse>) {
        return {
            ...state,
            // users: state.users,
            books: {
                book_create : state.books.book_create,
                book_list : {
                    state: 'success',
                    list: action.payload
                },
                recommend_book_list : state.books.recommend_book_list,
                delete_recommend_book : state.books.delete_recommend_book,
                add_recommend_book : state.books.add_recommend_book,
            }
        };
    },
    [ActionType.GET_BOOKS_LIST_ERROR](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            // users: state.users,
            books: {
                book_create : state.books.book_create,
                book_list : {
                    state: 'failure'
                },
                recommend_book_list : state.books.recommend_book_list,
                delete_recommend_book : state.books.delete_recommend_book,
                add_recommend_book : state.books.add_recommend_book,
            }
        };
    },
    [ActionType.GET_RECOMMEND_BOOKS_LIST_REQUEST](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            // users: state.users,
            books: {
                book_create : state.books.book_create,
                book_list : state.books.book_list,
                recommend_book_list : {
                    state: 'loading'
                },
                delete_recommend_book : state.books.delete_recommend_book,
                add_recommend_book : state.books.add_recommend_book,
            }
        };
    },
    [ActionType.GET_RECOMMEND_BOOKS_LIST_SUCCESS](state: PageState, action: Action<Interfaces.RecommendlistTypeServerResponse>) {
        return {
            ...state,
            // users: state.users,
            books: {
                book_create : state.books.book_create,
                book_list : state.books.book_list,
                recommend_book_list : {
                    state: 'success',
                    list: action.payload
                },
                delete_recommend_book : state.books.delete_recommend_book,
                add_recommend_book : state.books.add_recommend_book,
            }
        };
    },
    [ActionType.GET_RECOMMEND_BOOKS_LIST_ERROR](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            // users: state.users,
            books: {
                book_create : state.books.book_create,
                book_list : state.books.book_list,
                recommend_book_list : {
                    state: 'failure'
                },
                delete_recommend_book : state.books.delete_recommend_book,
                add_recommend_book : state.books.add_recommend_book,
            }
        };
    },
    [ActionType.DELETE_RECOMMEND_BOOKS_REQUEST](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            // users: state.users,
            books: {
                book_create : state.books.book_create,
                book_list : state.books.book_list,
                recommend_book_list : state.books.recommend_book_list,
                delete_recommend_book : {
                    state: 'loading'
                },
                add_recommend_book : state.books.add_recommend_book,
            }
        };
    },
    [ActionType.DELETE_RECOMMEND_BOOKS_SUCCESS](state: PageState, action: Action<Interfaces.RecommendlistTypeServerResponse>) {
        return {
            ...state,
            // users: state.users,
            books: {
                book_create : state.books.book_create,
                book_list : state.books.book_list,
                recommend_book_list : state.books.recommend_book_list,
                delete_recommend_book : {
                    state: 'success'
                },
                add_recommend_book : state.books.add_recommend_book,
            }
        };
    },
    [ActionType.DELETE_RECOMMEND_BOOKS_ERROR](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            // users: state.users,
            books: {
                book_create : state.books.book_create,
                book_list : state.books.book_list,
                recommend_book_list : state.books.recommend_book_list,
                delete_recommend_book : {
                    state: 'failure'
                },
                add_recommend_book : state.books.add_recommend_book,
            }
        };
    },
    [ActionType.ADD_RECOMMEND_BOOKS_REQUEST](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            // users: state.users,
            books: {
                book_create : state.books.book_create,
                book_list : state.books.book_list,
                recommend_book_list : state.books.recommend_book_list,
                delete_recommend_book : state.books.delete_recommend_book,
                add_recommend_book : {
                    'state': 'loading'
                }
            }
        };
    },
    [ActionType.ADD_RECOMMEND_BOOKS_SUCCESS](state: PageState, action: Action<Interfaces.RecommendlistTypeServerResponse>) {
        return {
            ...state,
            // users: state.users,
            books: {
                book_create : state.books.book_create,
                book_list : state.books.book_list,
                recommend_book_list : state.books.recommend_book_list,
                delete_recommend_book : state.books.delete_recommend_book,
                add_recommend_book : {
                    'state': 'success'
                }
            }
        };
    },
    [ActionType.ADD_RECOMMEND_BOOKS_ERROR](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            // users: state.users,
            books: {
                book_create : state.books.book_create,
                book_list : state.books.book_list,
                recommend_book_list : state.books.recommend_book_list,
                delete_recommend_book : state.books.delete_recommend_book,
                add_recommend_book : {
                    'state': 'failure'
                }
            }
        };
    }
});

export default pagesActionReducer;