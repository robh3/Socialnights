import React, { Component } from 'react';
import { View } from 'react-native';

export default class index extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {

    }


    render() {
        return (
            <View>
                Dashboard Navigator
            </View>
        );
    }


}
