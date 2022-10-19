import React, {useReducer, useContext} from 'react';
import reducer from './reducer';
import {
    ADD_NUMBER
} from './actions'

const initialState ={
    isPresent: false,
    numberIs: 5
}

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    

    return(
        <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext);
}

export {AppProvider, useAppContext};