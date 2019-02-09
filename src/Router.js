import React from 'react';
import {Scene,Router} from 'react-native-router-flux'
import RoomChoose from './components/LoginForm/RoomChoose'
import CreateRoom from './components/LoginForm/CreateRoom'
import JoinRoom from './components/LoginForm/JoinRoom'
import SongList from './components/SongList'
import SongAdd from './components/SongAdd'
import SpotifyLogin from './components/SpotifyLogin'
import{Actions} from 'react-native-router-flux'
import {PlayerScreen} from "./components/PlayerScreen";
const RouterComponent= () =>{
    return(
        <Router>
            <Scene
            key="root"
            titleStyle={{alignSelf: 'center'}}
            hideNavBar
            >
                <Scene key="Test">
                    <Scene
                    key="login"
                    component={SpotifyLogin}
                    title="Login"
                    initial
                    >
                    </Scene>
                    <Scene
                        key="player"
                        component={PlayerScreen}
                        title="Player"
                    >
                    </Scene>
                </Scene>
                <Scene key="main">
                    <Scene
                        rightTitle="Add Song"
                        onRight={()=>{Actions.SongAdd()}}
                        key="SongList"
                        component={SongList}
                        title="PlayList"
                        initial
                    >
                    </Scene>
                    <Scene
                        key="SongAdd"
                        component={SongAdd}
                        title="Search For A Song"
                    >
                    </Scene>
                </Scene>
                <Scene key="Auth">
                    <Scene
                        key="ChooseRoom"
                        component={RoomChoose}
                        hideNavBar={true}
                        initial
                    >
                    </Scene>
                    <Scene
                        key="CreateRoom"
                        component={CreateRoom}
                        title="Create Room"
                    >
                    </Scene>
                    <Scene
                        key="JoinRoom"
                        component={JoinRoom}
                        title="Join Room"
                    >
                    </Scene>
                </Scene>
            </Scene>
        </Router>
    );
};
export default RouterComponent