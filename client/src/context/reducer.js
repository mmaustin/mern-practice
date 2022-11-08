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
    GET_JOBS_SUCCESS    

} from './actions'
import { initialState } from './appContext'

const reducer = (state, action) => {
    if(action.type === DISPLAY_ALERT){
        return {
            ...state,
            showAlert: true,
            alertType: 'danger',
            alertText: 'Please provide all values!',
          }
    }

    if (action.type === CLEAR_ALERT) {
        return {
          ...state,
          showAlert: false,
          alertType: '',
          alertText: '',
        }
    }

    if(action.type === REGISTER_USER_BEGIN){
      return {...state, isLoading: true};
    }
    if(action.type === REGISTER_USER_SUCCESS){
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        user: action.payload.user,
        token: action.payload.token,
        alertType: 'success',
        alertText: 'User Created, redirecting . . . '
      }
    }
    if(action.type === REGISTER_USER_ERROR){
      return {...state, isLoading: false, showAlert: true, alertText: action.payload.msg};
    }   

    if(action.type === LOGIN_USER_BEGIN){
      return {...state, isLoading: true};
    }
    if(action.type === LOGIN_USER_SUCCESS){
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        user: action.payload.user,
        token: action.payload.token,
        alertType: 'success',
        alertText: 'User logged in, redirecting . . . '
      }
    }
    if(action.type === LOGIN_USER_ERROR){
      return {...state, isLoading: false, showAlert: true, alertText: action.payload.msg};
    }
    
    if(action.type === LOGOUT_USER){
      return {...initialState, user: null, token: null}
    }

    if (action.type === UPDATE_USER_BEGIN) {
      return { ...state, isLoading: true }
    }
    if (action.type === UPDATE_USER_SUCCESS) {
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        showAlert: true,
        alertType: 'success',
        alertText: 'User Profile Updated!',
      }
    }
    if (action.type === UPDATE_USER_ERROR) {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      }
    }
    if (action.type === HANDLE_CHANGE) {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    }
    
    if (action.type === CLEAR_VALUES){
      //don't quite get this
      const initialState = {
        isEditing: false,
        editEventId: '',
        organizer: '',
        description: '',
        eventType: 'other'
      }
      return {
        ...state, ...initialState
      }
    }

    if (action.type === CREATE_EVENT_BEGIN) {
      return { ...state, isLoading: true }
    }    

    if (action.type === CREATE_EVENT_SUCCESS) {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: 'New Job Created!',
      }
    }
    if (action.type === CREATE_EVENT_ERROR) {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      }
    }
    
    if (action.type === GET_JOBS_BEGIN) {
      return { ...state, isLoading: true, showAlert: false }
    }
    if (action.type === GET_JOBS_SUCCESS) {
      return {
        ...state,
        isLoading: false,
        events: action.payload.events,
        totalEvents: action.payload.totalEvents,
        numOfPages: action.payload.numOfPages,
      }
    }    

    throw new Error(`no such action : ${action.type}`)   
}

export default reducer;