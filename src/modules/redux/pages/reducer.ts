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
        book_activity_list : {
            state: 'idle',
        },
        delete_book_activity : {
            state: 'idle',
        }
    }
}

export const pagesActionReducer = createReducer<PageState>(initialState, {
    [ActionType.GET_USER_LIST_REQUEST](state: PageState) {
        return {
            ...state,
            users: {
                ...state.users,
                user_list : {
                    state: 'loading',
                },
            }
        }
    },
    [ActionType.GET_USER_LIST_SUCCESS](state: PageState, action: Action<Interfaces.listTypeServerResponse>) {
        return {
            ...state,
            users: {
                ...state.users,
                user_list : Object.assign({}, state.users.user_list, {
                    state: 'success',
                    list: action.payload
                })
            }
        };
    },
    [ActionType.GET_USER_LIST_ERROR](state: PageState, action: Action<Interfaces.listTypeServerResponse>) {
        return {
            ...state,
            users: {
                ...state.users,
                user_list: {
                    state: 'failure'
                }
            },
        };
    },

    [ActionType.GET_USER_INFO_REQUEST](state: PageState) {
        return {
            ...state,
            users: {
                ...state.users,
                user_info: {
                    state: 'loading'
                }
            },
        };
    },
    [ActionType.GET_USER_INFO_SUCCESS](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            users: {
                ...state.users,
                user_info: {
                    state: 'success',
                    data: action.payload
                }
            },
        };
    },
    [ActionType.GET_USER_INFO_ERROR](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            users: {
                ...state.users,
                user_info: {
                    state: 'failure',
                }
            },
        };
    },
    [ActionType.GET_USER_INFO_RESET](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            users: {
                ...state.users,
                user_info: {
                    state: 'idle',
                }
            },
        };
    },
    [ActionType.USER_DATA_UPDATE_SUCCESS](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            users: {
                ...state.users,
                user_data_update: {
                    state: 'success',
                }
            },
        };
    },
    [ActionType.USER_DATA_UPDATE_ERROR](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            users: {
                ...state.users,
                user_data_update: {
                    state: 'failure',
                }
            },
        };
    },
    [ActionType.USER_ACTIVE_UPDATE_REQUEST](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            users: {
                ...state.users,
                user_active_update: {
                    state: 'loading'
                }
            },
        };
    },
    [ActionType.USER_ACTIVE_UPDATE_SUCCESS](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            users: {
                ...state.users,
                user_active_update: {
                    state: 'success'
                }
            },
        };
    },
    [ActionType.USER_ACTIVE_UPDATE_ERROR](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            users: {
                ...state.users,
                user_active_update: {
                    state: 'failure'
                }
            },
        };
    },
    [ActionType.BOOK_CREATE_REQUEST](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            books: {
                ...state.books,
                book_create: {
                    state: 'loading'
                }
            },
        };
    },
    [ActionType.BOOK_CREATE_SUCCESS](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            books: {
                ...state.books,
                book_create: {
                    state: 'success',
                    info: action.payload.data
                }
            },
        };
    },
    [ActionType.BOOK_CREATE_ERROR](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            books: {
                ...state.books,
                book_create: {
                    state: 'failure',
                }
            },
        };
    },
    [ActionType.BOOK_CREATE_RESET](state: PageState) {
        return {
            ...state,
            books: {
                ...state.books,
                book_create: {
                    state: 'idle',
                }
            },
        };
    },
    [ActionType.GET_BOOKS_LIST_REQUEST](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            books: {
                ...state.books,
                book_list: {
                    state: 'loading',
                }
            },
        };
    },
    [ActionType.GET_BOOKS_LIST_SUCCESS](state: PageState, action: Action<Interfaces.booklistTypeServerResponse>) {
        return {
            ...state,
            books: {
                ...state.books,
                book_list: {
                    state: 'success',
                    list: action.payload
                }
            },
        };
    },
    [ActionType.GET_BOOKS_LIST_ERROR](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            books: {
                ...state.books,
                book_list: {
                    state: 'failure',
                }
            },
        };
    },
    [ActionType.GET_RECOMMEND_BOOKS_LIST_REQUEST](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            books: {
                ...state.books,
                recommend_book_list: {
                    state: 'loading',
                }
            },
        };
    },
    [ActionType.GET_RECOMMEND_BOOKS_LIST_SUCCESS](state: PageState, action: Action<Interfaces.RecommendlistTypeServerResponse>) {
        return {
            ...state,
            books: {
                ...state.books,
                recommend_book_list : {
                    state: 'success',
                    list: action.payload
                },
            }
        };
    },
    [ActionType.GET_RECOMMEND_BOOKS_LIST_ERROR](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            books: {
                ...state.books,
                recommend_book_list : {
                    state: 'failure',
                },
            }
        };
    },
    [ActionType.DELETE_RECOMMEND_BOOKS_REQUEST](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            books: {
                ...state.books,
                delete_recommend_book : {
                    state: 'loading',
                },
            }
        };
    },
    [ActionType.DELETE_RECOMMEND_BOOKS_SUCCESS](state: PageState, action: Action<Interfaces.RecommendlistTypeServerResponse>) {
        return {
            ...state,
            books: {
                ...state.books,
                delete_recommend_book : {
                    state: 'success'
                },
            }
        };
    },
    [ActionType.DELETE_RECOMMEND_BOOKS_ERROR](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            books: {
                ...state.books,
                delete_recommend_book : {
                    state: 'failure'
                },
            }
        };
    },
    [ActionType.ADD_RECOMMEND_BOOKS_REQUEST](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            books: {
                ...state.books,
                delete_recommend_book : {
                    state: 'loading'
                },
            }
        };
    },
    [ActionType.ADD_RECOMMEND_BOOKS_SUCCESS](state: PageState, action: Action<Interfaces.RecommendlistTypeServerResponse>) {
        return {
            ...state,
            books: {
                ...state.books,
                add_recommend_book : {
                    state: 'success'
                },
            }
        };
    },
    [ActionType.ADD_RECOMMEND_BOOKS_ERROR](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            books: {
                ...state.books,
                add_recommend_book : {
                    state: 'failure'
                },
            }
        };
    },
    [ActionType.GET_BOOKS_ACTIVITY_LIST_REQUEST](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            books: {
                ...state.books,
                book_activity_list : {
                    state: 'loading'
                },
            }
        };
    },
    [ActionType.GET_BOOKS_ACTIVITY_LIST_SUCCESS](state: PageState, action: Action<Interfaces.activitylistTypeServerResponse>) {
        return {
            ...state,
            books: {
                ...state.books,
                book_activity_list : {
                    state: 'success',
                    list:action.payload
                },
            }
        };
    },
    [ActionType.GET_BOOKS_ACTIVITY_LIST_ERROR](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            books: {
                ...state.books,
                book_activity_list : {
                    state: 'failure',
                },
            }
        };
    },
    [ActionType.DELETE_BOOKS_ACTIVITY_LIST_REQUEST](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            books: {
                ...state.books,
                delete_book_activity : {
                    state: 'loading',
                },
            }
        };
    },
    [ActionType.DELETE_BOOKS_ACTIVITY_LIST_SUCCESS](state: PageState, action: Action<Interfaces.activitylistTypeServerResponse>) {
        return {
            ...state,
            books: {
                ...state.books,
                delete_book_activity : {
                    state: 'success',
                },
            }
        };
    },
    [ActionType.DELETE_BOOKS_ACTIVITY_LIST_ERROR](state: PageState, action: Action<Interfaces.defaultServerResponse>) {
        return {
            ...state,
            books: {
                ...state.books,
                delete_book_activity : {
                    state: 'failure',
                },
            }
        };
    }



});

export default pagesActionReducer;