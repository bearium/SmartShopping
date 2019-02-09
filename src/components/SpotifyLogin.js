import React, { Component } from 'react';
import {
    ActivityIndicator,
    Alert,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

import Spotify from 'rn-spotify-sdk';
import{Actions} from 'react-native-router-flux'

export class SpotifyLogin extends Component
{

    constructor()
    {
        super();

        this.state = {spotifyInitialized: false};
        this.spotifyLoginButtonWasPressed = this.spotifyLoginButtonWasPressed.bind(this);
    }

    goToPlayer()
    {
        Actions.SongList()
    }

    componentDidMount()
    {
        // initialize Spotify if it hasn't been initialized yet

        const inital= !Spotify.isInitializedAsync();
        if(!inital)
        {
            // initialize spotify
            var spotifyOptions = {
                "clientID":"4ee9d90ab534493187fc324f9b82cdd6",
                "sessionUserDefaultsKey":"SpotifySession",
                "redirectURL":"examplespotifyapp://auth",
                "scopes":["user-read-private", "playlist-read", "playlist-read-private", "streaming"],
            };
            Spotify.initialize(spotifyOptions).then((loggedIn) => {
                // update UI state
                this.setState({spotifyInitialized: true});
                // handle initialization
                if(loggedIn)
                {
                    this.goToPlayer();
                }
            }).catch((error) => {
                Alert.alert("Error", error.message);
            });
        }
        else
        {
            // update UI state
            this.setState((state) => {
                state.spotifyInitialized = true;
                return state;
            });
            // handle logged in
            if(Spotify.isLoggedInAsync())
            {
                this.goToPlayer();
            }
        }
    }

    spotifyLoginButtonWasPressed()
    {
        // log into Spotify
        Spotify.login().then((loggedIn) => {
            if(loggedIn)
            {
                // logged in
                this.goToPlayer();
            }
            else
            {
                // cancelled
            }
        }).catch((error) => {
            // error
            Alert.alert("Error", error.message);
        });
    }

    render()
    {
        if(!this.state.spotifyInitialized)
        {
            return (
                <View style={styles.container}>
                    <ActivityIndicator animating={true} style={styles.loadIndicator}>
                    </ActivityIndicator>
                    <Text style={styles.loadMessage}>
                        Loading...
                    </Text>
                </View>
            );
        }
        else
        {
            return (
                <View style={styles.container}>
                    <Text style={styles.greeting}>
                        Spotify
                    </Text>
                    <TouchableHighlight onPress={this.spotifyLoginButtonWasPressed} style={styles.spotifyLoginButton}>
                        <Text style={styles.spotifyLoginButtonText}>Log into Spotify</Text>
                    </TouchableHighlight>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    loadIndicator: {
        //
    },
    loadMessage: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    spotifyLoginButton: {
        justifyContent: 'center',
        borderRadius: 18,
        backgroundColor: 'green',
        overflow: 'hidden',
        width: 200,
        height: 40,
        margin: 20,
    },
    spotifyLoginButtonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },

    greeting: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
export default SpotifyLogin