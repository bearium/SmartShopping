import React, {Component} from 'react'
import {View,Text} from 'react-native'
import Card from "../common/Card";
import CardHeader from "../common/CardHeader";
import Input from "../common/Input";
import Button from "../common/Button";
import Spinner from '../common/Spinner'
import {connect} from "react-redux"
import {RoomNameChanged,passwordChanged,passwordConfChanged,loginUser} from "../actions";

class CreateRoom extends Component{
    onRoomNameChange(text){
        this.props.RoomNameChanged(text)
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    onPasswordConfChange(text){
        this.props.passwordConfChanged(text);
    }
    onButtonPress(){
        const{email, password} = this.props;
        this.props.loginUser({email,password})
    }

    renderError(){
        if(this.props.error){
            return(
                <View style={{backgroundColor:'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }
    renderPassError(){
        if(this.props.password !== this.props.passwordConf && this.props.passwordConf !=='' && this.props.passwordConf !==undefined){
            return(
                <View style={{backgroundColor:'white'}}>
                    <Text style={styles.errorTextStyle}>
                        Passwords must Match
                    </Text>
                </View>
            )
        }
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size={"large"}/>
        }
        return (
            <Button
                onPress={this.onButtonPress.bind(this)}
            >
            Create
            </Button>
        )
    }

    render(){
        return(
            <Card>
                <CardHeader>
                    <Input
                        label={"Room"}
                        placeholder={"Room Name"}
                        onChangeText={this.onRoomNameChange.bind(this)}
                        value={this.props.roomName}
                    />
                </CardHeader>


                <CardHeader>
                    <Input
                        secureTextEntry
                        label={"Password"}
                        placeholder={"Password"}
                        value={this.props.password}
                        onChangeText={this.onPasswordChange.bind(this)}
                    />
                </CardHeader>

                <CardHeader>
                    <Input
                        secureTextEntry
                        label={"Password Confirmation"}
                        placeholder={"Confirm password"}
                        value={this.props.passwordConf}
                        onChangeText={this.onPasswordConfChange.bind(this)}
                    />
                </CardHeader>
                {this.renderPassError()}

                {this.renderError()}

                <CardHeader>
                    {this.renderButton()}
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
        roomName:state.auth.roomName,
        password:state.auth.password,
        passwordConf:state.auth.passwordConf,
        error:state.auth.error,
        loading:state.auth.loading
    }
};

export default connect(mapStateToProps,{RoomNameChanged,passwordChanged,passwordConfChanged,loginUser})(CreateRoom)