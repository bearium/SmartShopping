import {SEARCH_CHANGED, EMPLOYEE_CREATE, SEARCH_FETCH_SUCCESS, EMPLOYEE_SAVE_SUCCESS, EMAIL_CHANGED} from "./types"
import {Actions} from 'react-native-router-flux'
import Spotify from 'rn-spotify-sdk';



export const SearchChanged =(text) => {
    return(dispatch) => {
        dispatch({
            type: SEARCH_CHANGED,
            payload: text
        });
        Spotify.search(text,['track'],{limit:"5"})
        .then(tracks=>{
            dispatch({type:SEARCH_FETCH_SUCCESS,payload:tracks})
        })
            .catch()
    }
};



export const employeesFetch =() => {

    return (dispatch) => {

    };
};

export const songAdd =(id) => {

};