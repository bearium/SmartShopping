import {SEARCH_CHANGED} from '../components/actions/types'

const INITIAL_STATE={};


export default (state = INITIAL_STATE, action)=> {
    switch (action.type) {
        case SEARCH_CHANGED:
            return {...state, searchSong: action.payload};
        default:
            return state;
    }
}