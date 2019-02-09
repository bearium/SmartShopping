import React,{Component} from 'react';
import{Text,TouchableOpacity,View,StyleSheet,Image} from 'react-native';
import CardHeader from './CardHeader'
import Card from './Card'
import Confirm from './Confirm'
import {Actions} from 'react-native-router-flux'
import {songAdd} from "../actions/PlaylistActions";
import {connect} from "react-redux"


class ListItem extends Component {
    state = {showModal: false};
    onRowPress() {
        this.setState({showModal:!this.state.showModal});

    }
    onAccept(){
        console.log(this.props.song.id);
        this.setState({showModal:!this.state.showModal});
        this.props.songAdd(this.props.song.id);
    }
    onDecline(){
        this.setState({showModal:!this.state.showModal})
    }

    render() {
        return (
            <Card>
                <TouchableOpacity onPress={this.onRowPress.bind(this)}>
                <CardHeader>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image style={styles.thumbnailStyle} source={{uri: this.props.song.album.images[0].url}}/>
                    </View>
                    <View style={styles.headerStyle}>
                        <Text>Song: {this.props.song.name}</Text>
                        <Text>Artist: {this.props.song.artists[0].name}</Text>
                    </View>
                    <View style={styles.floatRight}>
                    </View>
                </CardHeader>
                    <Confirm
                        visible={this.state.showModal}
                        onAccept={this.onAccept.bind(this)}
                        onDecline={this.onDecline.bind(this)}

                    >
                        Add This song to the playlist?
                    </Confirm>
            </TouchableOpacity>
            </Card>
        )
    };
}

const styles = StyleSheet.create({
        headerStyle: {
            flexDirection:'column',
            justifyContent: 'space-around'
        },
        thumbnailStyle:{
            height:50,
            width:50,
        },
        thumbnailContainerStyle:{
            justifyContent: 'center',
            alignItems:'center',
            marginLeft:10,
            marginRight:10
        },
        imageStyle:{
            height:300,
            flex:1,
            width:null
        },
        buttonStyle: {
            height:50,
            width:50,
            alignContent:"flex-end",
            alignSelf:"flex-end",
            backgroundColor: "#fff",
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#007aff',
            marginLeft:5,
            marginRight:5,
        },
        floatRight:{
            flexDirection:"row",
            justifyContent:'flex-end',
            alignContent:"flex-end",
            alignSelf:"flex-end",
        },
        buttonText:{
            alignSelf:'center',
            color: "#007aff",
            fontSize:16,
            fontWeight: '600',
            paddingTop:10,
            paddingBottom:10
        }
    }
);

export default connect(null,{songAdd})(ListItem)