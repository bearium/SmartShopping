import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { cartFetch } from '../actions/CartFetch';
import ListItem from './ListItem';

class ShoppingCart extends Component {
    componentWillMount() {
        this.props.cartFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component
        // will be rendered with
        // this.props is still the old set of props

        this.createDataSource(nextProps);
    }

    createDataSource({ items }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(items);
    }

    renderRow(items) {
        return <ListItem item={items} />;
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    console.log(state.cart);
    const items = _.map(state.cart, (val, uid) => {
        return { ...val, uid };
    });

    return { items };
};

export default connect(mapStateToProps, { cartFetch })(ShoppingCart);
