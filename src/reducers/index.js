import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer'
import SearchSongReducer from './SearchSongReducer'
import Playlist from './PlaylistRudecer'

export default combineReducers({
        auth: AuthReducer,
        playlist: Playlist,
        songs:SearchSongReducer
    });