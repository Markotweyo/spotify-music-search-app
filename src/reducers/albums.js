

const albumsReducer = (state = {}, action) => {
    switch (action.type) {

    case action.typeName:
        return { ...state }

    default:
        return state
    }
}
export default albumsReducer;
