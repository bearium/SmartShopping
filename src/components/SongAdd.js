import _ from 'lodash'
import React, {Component} from 'react'
import Communications from 'react-native-communications'
import Card from "./common/Card";
import CardHeader from "./common/CardHeader";
import Button from "./common/Button";
import ListItem from "./common/ListItem";
import {connect} from "react-redux"
import {SearchChanged} from "./actions/PlaylistActions";
import {StyleSheet, Text, View, TextInput, ListView} from "react-native";
import SongSearchList from "./SongSearchList";


class SongAdd extends Component{
    onSongSearchChange(text){
        this.props.SearchChanged(text);
    }


    render(){
        return(
            <Card>
                <CardHeader>
                    <View style={styles.containerStyle}>
                        <TextInput
                            placeholder={"Song Name"}
                            autoCorrect={false}
                            style={styles.TextInputStyle}
                            value={this.props.searchSong}
                            onChangeText={this.onSongSearchChange.bind(this)}
                        />
                    </View>
                </CardHeader>
                <SongSearchList/>
            </Card>
        );
    }
}
const styles = StyleSheet.create({
        TextInputStyle: {
            color:"#000",
            paddingRight:5,
            paddingLeft:5,
            fontSize:18,
            lineHeight: 23,
            flex:3
        },
        containerStyle:{
            height:40,
            flex:1,
            flexDirection:'row',
            alignItems: 'center'
        },

    }
);



const mapStateToProps = (state)=> {
    return{
        searchSong: state.searchSong
    }
};

export default connect(mapStateToProps,{SearchChanged}) (SongAdd);