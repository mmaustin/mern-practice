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
        //not needed with cookies
        //token: action.payload.token,
        alertType: 'success',
        alertText: 'User Created, redirecting . . . '
      }
    }
    if(action.type === REGISTER_USER_ERROR){
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertText: action.payload.msg
      };
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
        //not needed with cookies
        //token: action.payload.token,
        alertType: 'success',
        alertText: 'User logged in, redirecting . . . '
      }
    }
    if(action.type === LOGIN_USER_ERROR){
      return {...state, isLoading: false, showAlert: true, alertText: action.payload.msg};
    }
    
    if(action.type === LOGOUT_USER){
      //not needed with cookies , token: null }
      return {...initialState, user: null}
    }

    if (action.type === UPDATE_USER_BEGIN) {
      return { ...state, isLoading: true }
    }
    if (action.type === UPDATE_USER_SUCCESS) {
      return {
        ...state,
        isLoading: false,
        //not needed with cookies
        //token: action.payload.token,
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
    //all references to jobs should be events
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
    
    if (action.type === SET_EDIT_EVENT) {
      const event = state.events.find((event) => event._id === action.payload.id)
      const { _id, organizer, description, eventType } = event
      return {
        ...state,
        isEditing: true,
        editEventId: _id,
        organizer,
        description,
        eventType
      }
    }
    
    if (action.type === DELETE_EVENT_BEGIN) {
      return { ...state, isLoading: true }
    }

    if (action.type === EDIT_EVENT_BEGIN) {
      return {
        ...state,
        isLoading: true,
      }
    }
    if (action.type === EDIT_EVENT_SUCCESS) {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: 'Event Updated!',
      }
    }
    if (action.type === EDIT_EVENT_ERROR) {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      }
    }

    throw new Error(`no such action : ${action.type}`)   
}

export default reducer;