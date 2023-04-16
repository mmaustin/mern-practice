import React, {useReducer, useContext, useEffect } from 'react';
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
    CLEAR_VALUES,
    CREATE_EVENT_BEGIN,
    CREATE_EVENT_SUCCESS,
    CREATE_EVENT_ERROR,
    GET_JOBS_BEGIN,      
    GET_JOBS_SUCCESS,
    SET_EDIT_EVENT,
    DELETE_EVENT_BEGIN,
    EDIT_EVENT_BEGIN,
    EDIT_EVENT_SUCCESS,
    EDIT_EVENT_ERROR,
    GET_CURRENT_USER_BEGIN,
    GET_CURRENT_USER_SUCCESS,     
} from './actions'

//No longer needed for cookie auth
// const token = localStorage.getItem('token');
// const user = localStorage.getItem('user');

const initialState ={
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    //Cookie code needed to get user on refresh
    userLoading: true,
    //Code needed for storing token in local state, now we just have user: null
    // user: user ? JSON.parse(user) : null,
    // token: token,
    user: null,
    isEditing: false,
    editEventId: '',
    organizer: '',
    description: '',
    eventTypeOptions: ['sitter', 'celebration', 'tutoring', 'other'],
    eventType: 'other',
    events: [],
    totalEvents: 0,
    numOfPages: 1,
    page: 1, 
}

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

  // axios
  const authFetch = axios.create({
    baseURL: '/api/v1',
  })
  // request
  //No longer needed for cookie auth
  // authFetch.interceptors.request.use(
  //   (config) => {
  //       //not config.headers.common!!!! don't know why it worked on the last project?
  //     config.headers['Authorization'] = `Bearer ${state.token}`
  //     return config
  //   },
  //   (error) => {
  //     return Promise.reject(error)
  //   }
  // )
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
    
    //No longer needed for cookie auth
    // const addUserToLocalStorage = ({ user, token }) => {
    //     localStorage.setItem('user', JSON.stringify(user))
    //     localStorage.setItem('token', token)
    //   }
    
    //   const removeUserFromLocalStorage = () => {
    //     localStorage.removeItem('token')
    //     localStorage.removeItem('user')
    //   }    
    
    const handleChange = ({name, value}) =>{
      dispatch({ type: HANDLE_CHANGE, payload: { name, value } })
    }

    const clearValues = () => {
      dispatch({type: CLEAR_VALUES})
    }

    //Remove token instances and local storage, no longer needed for cookie auth
    const registerUser = async (currentUser) => {
        dispatch({type: REGISTER_USER_BEGIN});
        try {
            const {data} = await axios.post('/api/v1/auth/register', currentUser)
            const {user} = data;
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: {user}
            });
            //addUserToLocalStorage({ user, token })           
        } catch (error) {
            dispatch({
                type: REGISTER_USER_ERROR,
                payload: {msg: error.response.data.msg}
            });
        }
        clearAlert();
    }
    //Remove token instances and local storage, no longer needed for cookie auth
    const loginUser = async (currentUser) => {
        dispatch({type: LOGIN_USER_BEGIN});
        try {
            const {data} = await axios.post('/api/v1/auth/login', currentUser)
            const {user} = data;
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: {user}
            });
            //addUserToLocalStorage({ user, token })            
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
        //removeUserFromLocalStorage()
      }

      //Remove token instances and local storage, no longer needed for cookie auth
      const updateUser = async (currentUser) => {
        dispatch({ type: UPDATE_USER_BEGIN })
        try {
          const { data } = await authFetch.patch('/auth/updateUser', currentUser)
            console.log(data);
            const { user } = data
    
          dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: { user },
          })
          //addUserToLocalStorage({ user, token })
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

      const createEvent = async () => {
        dispatch({ type: CREATE_EVENT_BEGIN })
        try {
          const { organizer, description, eventType } = state
          await authFetch.post('/events', {
            organizer,
            description,
            eventType
          })
          dispatch({ type: CREATE_EVENT_SUCCESS })
          dispatch({ type: CLEAR_VALUES })
        } catch (error) {
          if (error.response.status === 401) return
          dispatch({
            type: CREATE_EVENT_ERROR,
            payload: { msg: error.response.data.msg },
          })
        }
        clearAlert()
      }
      //of course all references to jobs should be events!!!
      const getJobs = async () => {
        let url = `/events`;
        // const { page, search, searchStatus, searchType, sort } = state
    
        // let url = `/jobs?page=${page}&status=${searchStatus}&jobType=${searchType}&sort=${sort}`
        // if (search) {
        //   url = url + `&search=${search}`
        // }
        dispatch({ type: GET_JOBS_BEGIN })
        try {
          const { data } = await authFetch(url)
          const { events, totalEvents, numOfPages } = data
          dispatch({
            type: GET_JOBS_SUCCESS,
            payload: {
              events,
              totalEvents,
              numOfPages,
            },
          })
        } catch (error) {
          logoutUser()
        }
        clearAlert()
      }

      const setEditEvent = (id) => {
        dispatch({ type: SET_EDIT_EVENT, payload: { id } })
      }

      const editEvent = async () => {
        dispatch({ type: EDIT_EVENT_BEGIN })

        try {
          const { organizer, description, eventType} = state
          await authFetch.patch(`/events/${state.editEventId}`, {
            organizer,
            description,
            eventType
          })
          dispatch({ type: EDIT_EVENT_SUCCESS })
          dispatch({ type: CLEAR_VALUES })
        } catch (error) {
          if (error.response.status === 401) return
          dispatch({
            type: EDIT_EVENT_ERROR,
            payload: { msg: error.response.data.msg },
          })
        }
        clearAlert()
      }
      //all references to jobs should be events
      const deleteEvent = async (eventId) => {
        dispatch({ type: DELETE_EVENT_BEGIN })
        try {
          await authFetch.delete(`/events/${eventId}`)
          getJobs()
        } catch (error) {
          console.log(error.response);
          //logoutUser()
        }
      }

      const getCurrentUser = async () => {
        dispatch({type: GET_CURRENT_USER_BEGIN})
        try {
          const {data} = await authFetch('/auth/getCurrentUser')
          const {user} = data;
          dispatch({
            type: GET_CURRENT_USER_SUCCESS,
            payload: {user}
          })
        } catch (error) {
          if(error.response.status === 401) return;
          logoutUser();
        }
      }

        useEffect(() => {
          getCurrentUser()
        }, []) 
      

    return(
        <AppContext.Provider value={{...state, displayAlert, clearAlert, registerUser, loginUser, logoutUser, updateUser, handleChange, clearValues, createEvent, getJobs, setEditEvent, deleteEvent, editEvent}}>{children}</AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext);
}

export {AppProvider, useAppContext, initialState};