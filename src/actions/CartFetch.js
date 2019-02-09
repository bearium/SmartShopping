import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    CART_FETCH_SUCCESS,
} from './types';

export const cartFetch = () => {
    console.log("here");
    return (dispatch) => {
        firebase.database().ref('/Cart')
            .on('value', snapshot => {
                console.log(snapshot.val());
                dispatch({ type: CART_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};
