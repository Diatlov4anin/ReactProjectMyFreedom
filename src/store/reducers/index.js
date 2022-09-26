import { combineReducers } from "redux";

const initialDataFromFormState = {
    dataFromForm: {
        nameUser: "",
        email: "",
        phoneNumber: "",
        userMessage: "",
    }
}

const addDataFromFormReducer = (state = initialDataFromFormState, action) => {
    switch (action.type) {
        case "DATA_FROM_FORM":
            return { ...state, dataFromForm: action.payload }
        default:
            return state
    }
}


const initialBlogState = {
    blog: [],
    error: "",
}
const fetchBlogReducer = (state = initialBlogState, action) => {
    switch (action.type) {
        case 'FETCH_BLOG_SUCCESS':
            return { ...state, blog: action.payload }
        case 'FETCH_BLOG_FAILURE':
            return { ...state, blog: [], error: action.payload }
        default:
            return state
    }
}


export const rootReducer = combineReducers({
    addDataFromFormReducer,
    fetchBlogReducer,
})