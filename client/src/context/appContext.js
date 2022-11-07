import React, {useReducer, useContext} from 'react';
import reducer from './reducer';
import axios from 'axios';

import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGIN_USER_BEGIN,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    LOGOUT_USER,
    UPDATE_USER_BEGIN,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    HANDLE_CHANGE,
    CLEAR_VALUES  
} from './actions'

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');

const initialState ={
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user: user ? JSON.parse(user) : null,
    token: token,
    isEditing: false,
    editEventId: '',
    organizer: '',
    description: '',
    eventTypeOptions: ['sitter', 'celebration', 'tutoring', 'other'],
    eventType: 'other'
}

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

  // axios
  const authFetch = axios.create({
    baseURL: '/api/v1',
  })
  // request

  authFetch.interceptors.request.use(
    (config) => {
        //not config.headers.common!!!! don't know why it worked on the last project?
      config.headers['Authorization'] = `Bearer ${state.token}`
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  // response

  authFetch.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error.response.status === 401) {
        logoutUser()
      }
      return Promise.reject(error)
    }
  )    

    const displayAlert = () => {
        dispatch({ type: DISPLAY_ALERT })
        clearAlert();
    }
    
    const clearAlert = () => {
        setTimeout(() => {
          dispatch({ type: CLEAR_ALERT })
        }, 3000)
    }

    const addUserToLocalStorage = ({ user, token }) => {
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
      }
    
      const removeUserFromLocalStorage = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
      }    
    
    const handleChange = ({name, value}) =>{
      dispatch({ type: HANDLE_CHANGE, payload: { name, value } })
    }

    const clearValues = () => {
      dispatch({type: CLEAR_VALUES})
    }

    const registerUser = async (currentUser) => {
        dispatch({type: REGISTER_USER_BEGIN});
        try {
            const {data} = await axios.post('/api/v1/auth/register', currentUser)
            const {user, token} = data;
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: {user, token}
            });
            addUserToLocalStorage({ user, token })           
        } catch (error) {
            dispatch({
                type: REGISTER_USER_ERROR,
                payload: {msg: error.response.data.msg}
            });
        }
        clearAlert();
    }

    const loginUser = async (currentUser) => {
        dispatch({type: LOGIN_USER_BEGIN});
        try {
            const {data} = await axios.post('/api/v1/auth/login', currentUser)
            const {user, token} = data;
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: {user, token}
            });
            addUserToLocalStorage({ user, token })            
        } catch (error) {
            dispatch({
                type: LOGIN_USER_ERROR,
                payload: {msg: error.response.data.msg}
            });
        }
        clearAlert();
    }

    const logoutUser = () => {
        dispatch({ type: LOGOUT_USER })
        removeUserFromLocalStorage()
      }

      const updateUser = async (currentUser) => {
        dispatch({ type: UPDATE_USER_BEGIN })
        try {
          const { data } = await authFetch.patch('/auth/updateUser', currentUser)
            console.log(data);
            const { user, token } = data
    
          dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: { user, token },
          })
          addUserToLocalStorage({ user, token })
        } catch (error) {
            if (error.response.status !== 401) {
                dispatch({
                  type: UPDATE_USER_ERROR,
                  payload: { msg: error.response.data.msg },
                })
            }      
        }
        clearAlert()
      }

    return(
        <AppContext.Provider value={{...state, displayAlert, clearAlert, registerUser, loginUser, logoutUser, updateUser, handleChange, clearValues}}>{children}</AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext);
}

export {AppProvider, useAppContext, initialState};