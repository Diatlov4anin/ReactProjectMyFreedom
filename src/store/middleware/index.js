import { fetchBlogSuccessAC, fetchBlogFailureAC } from "../actionCreators";

export const fetchBlogMiddleware = () => {
    return async dispatch => {
        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/categories');
            const data = await response.json();
            dispatch(fetchBlogSuccessAC(data));
        } catch(err) {
            dispatch(fetchBlogFailureAC(err.message));
        }
    }
}