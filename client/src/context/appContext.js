import React, {useReducer, useContext} from 'react';

const initialState ={
    isPresent: false,
    numberIs: 5
}

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(initialState);

    return(
        <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext);
}

export {AppProvider, useAppContext};