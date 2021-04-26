import INITIATE from "../Constants/postConstants";
const initialState = {posts : []}
const postReducer = (state=initialState, action) => {
    switch (action.type) {
        case INITIATE:
            return {posts : action.payload}
        default:
            return state;
    }
}
export default postReducer;