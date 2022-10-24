import React, {useReducer, useContext} from 'react';
import reducer from './reducer';
import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR
} from './actions'

const initialState ={
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
}

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const displayAlert = () => {
        dispatch({ type: DISPLAY_ALERT })
        clearAlert();
    }
    
    const clearAlert = () => {
        setTimeout(() => {
          dispatch({ type: CLEAR_ALERT })
        }, 3000)
    }

    const registerUser = async () => {
        dispatch({type: REGISTER_USER_BEGIN});
    }

    return(
        <AppContext.Provider value={{...state, displayAlert, clearAlert}}>{children}</AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext);
}

export {AppProvider, useAppContext};