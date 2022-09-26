export const dataFromFormAC = (dataFromForm) => {
    return {
        type: "DATA_FROM_FORM",
        payload: dataFromForm,
    }
}


export const fetchBlogSuccessAC = (blogData) => {
    return {
        type: "FETCH_BLOG_SUCCESS",
        payload: blogData,
    }
}

export const fetchBlogFailureAC = (errorObj) => {
    return {
        type: "FETCH_BLOG_FAILURE",
        payload: errorObj,
    }
}





export const bindActionCreator = (creator, dispatch) => (...arg) => {
    dispatch (creator(...arg))
}