export enum ActionType {
    // Root Data
    GET_ROOTDATA_REQUEST = 'root/GET_ROOTDATA_REQUEST ',
    GET_ROOTDATA_SUCCESS = 'root/GET_ROOTDATA_SUCCESS',
    GET_ROOTDATA_ERROR = 'root/GET_ROOTDATA_ERROR',

    // 로그인
    LOGIN_DATA_REQUEST = 'login/LOGIN_DATA_REQUEST',
    LOGIN_DATA_SUCCESS = 'login/LOGIN_DATA_SUCCESS',
    LOGIN_DATA_ERROR = 'login/LOGIN_DATA_ERROR',
    LOGIN_DATA_RESET = 'login/LOGIN_DATA_RESET',


    // 회원 리스트
    GET_USER_LIST_REQUEST = 'users/GET_USER_LIST_REQUEST',
    GET_USER_LIST_SUCCESS = 'users/GET_USER_LIST_SUCCESS',
    GET_USER_LIST_ERROR = 'users/GET_USER_LIST_ERROR',

    GET_USER_INFO_REQUEST = 'users/GET_USER_INFO_REQUEST',
    GET_USER_INFO_SUCCESS = 'users/GET_USER_INFO_SUCCESS',
    GET_USER_INFO_ERROR = 'users/GET_USER_INFO_ERROR',
    GET_USER_INFO_RESET = 'users/GET_USER_INFO_RESET',

    USER_DATA_UPDATE_REQUEST = 'users/USER_DATA_UPDATE_REQUEST',
    USER_DATA_UPDATE_SUCCESS = 'users/USER_DATA_UPDATE_SUCCESS',
    USER_DATA_UPDATE_ERROR = 'users/USER_DATA_UPDATE_ERROR',

    USER_ACTIVE_UPDATE_REQUEST = 'users/USER_ACTIVE_UPDATE_REQUEST',
    USER_ACTIVE_UPDATE_SUCCESS = 'users/USER_ACTIVE_UPDATE_SUCCESS',
    USER_ACTIVE_UPDATE_ERROR = 'users/USER_ACTIVE_UPDATE_ERROR',

    BOOK_CREATE_REQUEST = 'book/BOOK_CREATE_REQUEST',
    BOOK_CREATE_SUCCESS = 'book/BOOK_CREATE_SUCCESS',
    BOOK_CREATE_ERROR = 'book/BOOK_CREATE_ERROR',

    GET_BOOKS_LIST_REQUEST = 'book/GET_BOOKS_LIST_REQUEST',
    GET_BOOKS_LIST_SUCCESS = 'book/GET_BOOKS_LIST_SUCCESS',
    GET_BOOKS_LIST_ERROR = 'book/GET_BOOKS_LIST_ERROR',

    GET_BOOKS_ACTIVITY_LIST_REQUEST = 'book/GET_BOOKS_ACTIVITY_LIST_REQUEST',
    GET_BOOKS_ACTIVITY_LIST_SUCCESS = 'book/GET_BOOKS_ACTIVITY_LIST_SUCCESS',
    GET_BOOKS_ACTIVITY_LIST_ERROR = 'book/GET_BOOKS_ACTIVITY_LIST_ERROR',

    DELETE_BOOKS_ACTIVITY_LIST_REQUEST = 'book/DELETE_BOOKS_ACTIVITY_LIST_REQUEST',
    DELETE_BOOKS_ACTIVITY_LIST_SUCCESS = 'book/DELETE_BOOKS_ACTIVITY_LIST_SUCCESS',
    DELETE_BOOKS_ACTIVITY_LIST_ERROR = 'book/DELETE_BOOKS_ACTIVITY_LIST_ERROR',

    GET_RECOMMEND_BOOKS_LIST_REQUEST = 'book/GET_RECOMMEND_BOOKS_LIST_REQUEST',
    GET_RECOMMEND_BOOKS_LIST_SUCCESS = 'book/GET_RECOMMEND_BOOKS_LIST_SUCCESS',
    GET_RECOMMEND_BOOKS_LIST_ERROR = 'book/GET_RECOMMEND_BOOKS_LIST_ERROR',

    ADD_RECOMMEND_BOOKS_REQUEST = 'book/ADD_RECOMMEND_BOOKS_REQUEST',
    ADD_RECOMMEND_BOOKS_SUCCESS = 'book/ADD_RECOMMEND_BOOKS_SUCCESS',
    ADD_RECOMMEND_BOOKS_ERROR = 'book/ADD_RECOMMEND_BOOKS_ERROR',

    DELETE_RECOMMEND_BOOKS_REQUEST = 'book/DELETE_RECOMMEND_BOOKS_REQUEST',
    DELETE_RECOMMEND_BOOKS_SUCCESS = 'book/DELETE_RECOMMEND_BOOKS_SUCCESS',
    DELETE_RECOMMEND_BOOKS_ERROR = 'book/DELETE_RECOMMEND_BOOKS_ERROR',
}