import React, { Component } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import * as css from 'src/style';

const {width, height} = Dimensions.get('window');

export default class index extends Component {

    static navigationOptions = {
        title: 'Login',
    }

    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {

    }


    render() {

        const {params} = this.props.navigation.state;

        return (
            <View style={css.global.v_container}>
                <Text style={css.global.body1}>Login</Text>
            </View>
        );
    }


}

