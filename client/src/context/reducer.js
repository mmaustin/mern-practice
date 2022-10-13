import {
    ADD_NUMBER
} from './actions'

const reducer = (state, action) => {
    if(action.type === ADD_NUMBER){
        return {
            ...state,
            numberIs: state.numberIs + 5,
        }
    }
}

export default reducer;