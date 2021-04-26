import constants from "../Constants/postConstants";
import axios from "axios";
const initiatePosts = (posts) => {
    return async (dispatch) => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        dispatch({
            type: constants.INITIATE,
            payload: response.data
        });
    };   
};
export default {
    initiatePosts,
};