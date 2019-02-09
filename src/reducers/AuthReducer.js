import {EMAIL_CHANGED,PASSWORD_CHANGED,PASSWORDCONF_CHANGED,LOGIN_USER_SUCCESS,LOGIN_USER_FAIL,LOGIN_USER} from '../components/actions/types'




const INITIAL_STATE = {email:'',password:'',user:null,error:'',loading:false};


export default (state = INITIAL_STATE, action)=> {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, loading: true, error: ''};
        case LOGIN_USER_SUCCESS:
            return {...state, error: '', user: action.payload, loading: false};
        case LOGIN_USER_FAIL:
            return {...state, error: 'Authentication FAILED', loading: false};
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};
        case PASSWORDCONF_CHANGED:
            return {...state, passwordConf: action.payload};
        case EMAIL_CHANGED:
            return {...state, email: action.payload};
        default:
            return state
    }
}
