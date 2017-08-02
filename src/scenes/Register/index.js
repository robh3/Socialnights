import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as css from 'src/style';

export default class index extends Component {

    static navigationOptions = {
        title: 'Register',
    }

    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {

    }


    render() {
        return (
            <View style={css.global.v_container}>
                <Text style={css.global.body1}>Register Now</Text>
            </View>
        );
    }


}
