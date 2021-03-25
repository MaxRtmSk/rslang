const SET_WORDS = 'SET_WORDS'
const SET_USER_WORDS = 'SET_USER_WORDS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_CURRENT_GROUP = 'SET_CURRENT_GROUP';

let initialState = {
    words: [],
    userWords:[],
    totalPages: 30,
    currentPage: 1,
    totalGroup: 6,
    currentGroup: 1
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WORDS: {
            return {...state, words: action.words}
        }
        case SET_USER_WORDS: {
            return {...state, userWords: action.userWords}
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_CURRENT_GROUP: {
            return { ...state, currentGroup: action.currentGroup }
        }
        default:
            return state
    }
}

export const setWords = (words) => ({ type: SET_WORDS, words })
export const setUserWords = (userWords) => ({ type: SET_USER_WORDS, userWords })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setCurrentGroup = (currentGroup) => ({ type: SET_CURRENT_GROUP, currentGroup })

export default bookReducer;