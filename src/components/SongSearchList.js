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


class SongSearchList extends Component{
    componentWillMount(){
        this.props.SearchChanged("");

        this.createDataSource(this.props)
    }

    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps)
    }

    createDataSource({songs}){
        const ds= new ListView.DataSource({
            rowHasChanged:(r1,r2)=> r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(songs)

    }

    renderRow(songs){
        return <ListItem song={songs}/>;
    }

    render(){
        return(
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = (state) => {

    if(state.songs.tracks !==undefined) {

        const songs = _.map(state.songs.tracks.items, (val, uid) => {
            return {...val, uid};
        });
        return {songs};
    }
    else {
        const songs = _.map(state.songs, (val, uid) => {
            return {...val, uid};
        });
        return {songs};
    }
};

export default connect(mapStateToProps,{SearchChanged})(SongSearchList);