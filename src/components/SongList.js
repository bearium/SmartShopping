import _ from 'lodash';
import React, {Component} from 'react';
import {View,Text,ListView} from 'react-native';
import Card from "./common/Card";
import CardHeader from "./common/CardHeader";
import {connect} from "react-redux"
import {employeesFetch} from "./actions/PlaylistActions";
import ListItem from './common/ListItem'

class SongList extends Component{
    componentWillMount(){

        this.createDataSource(this.props)
    }

    componentWillReceiveProps(nextProps){
       this.createDataSource(nextProps)
    }

    createDataSource({employees}){
        const ds= new ListView.DataSource({
            rowHasChanged:(r1,r2)=> r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees)
    }

    renderRow(employee){
        return <ListItem employee={employee}/>;
    }

    render(){
        return(
           // <ListView
           //     enableEmptySections
          //      dataSource={this.dataSource}
          //      renderRow={this.renderRow}
         //   />
            <Text>HElp</Text>
        );
    }
}

const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => {
        return {...val, uid };
    });
    return { employees};
};

export default connect(mapStateToProps,{employeesFetch})(SongList);