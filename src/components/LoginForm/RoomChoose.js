import React, {Component} from 'react'
import Card from "../common/Card";
import CardHeader from "../common/CardHeader";
import Button from "../common/Button";
import {connect} from "react-redux"
import {emailChanged,passwordChanged,loginUser} from "../actions";
import {Actions} from 'react-native-router-flux'

class RoomChoose extends Component{
    joinRoom(){
    Actions.JoinRoom();
    }
    createRoom(){
        Actions.CreateRoom();
    }

    render(){
        return(
            <Card>
                <CardHeader>
                    <Button
                        onPress={this.createRoom.bind(this)}
                    >
                        Create
                    </Button>
                </CardHeader>


                <CardHeader>
                    <Button
                        onPress={this.joinRoom.bind(this)}
                    >
                        Join
                    </Button>
                </CardHeader>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
};

const mapStateToProps= state =>{
    return{
        email:state.auth.email,
        password:state.auth.password,
        error:state.auth.error,
        loading:state.auth.loading
    }
};

export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(RoomChoose)