import React, { Component } from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import Spotify from 'rn-spotify-sdk';
import{Actions} from 'react-native-router-flux'

export class PlayerScreen extends Component
{

    constructor()
    {
        super();

        this.state = { spotifyUserName: null };

        this.spotifyLogoutButtonWasPressed = this.spotifyLogoutButtonWasPressed.bind(this);
    }

    componentDidMount()
    {
        // send api request to get user info
        Spotify.getMe().then((result) => {
            // update state with user info
            this.setState({ spotifyUserName: result.display_name });
            // play song
            return Spotify.playURI("spotify:track:5sT3app9Wcu4FAGnNs9oZR", 0, 0);
        }).then(() => {
            // success
        }).catch((error) => {
            // error
            Alert.alert("Error", error.message);
        });
    }

    goToInitialScreen()
    {
        Actions.login()
    }

    spotifyLogoutButtonWasPressed()
    {
        Spotify.logout().finally(() => {
            this.goToInitialScreen();
        });
    }

    render()
    {
        return (
            <View style={styles.container}>
                { this.state.spotifyUserName!=null ? (
                    <Text style={styles.greeting}>
                        You are logged in as {this.state.spotifyUserName}
                    </Text>
                ) : (
                    <Text style={styles.greeting}>
                        Getting user info...
                    </Text>
                )}
                <TouchableHighlight onPress={this.spotifyLogoutButtonWasPressed}>
                    <Text>Logout</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    greeting: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
