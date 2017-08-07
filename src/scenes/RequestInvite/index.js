import React, { Component } from 'react';
import { Text, View } from 'react-native';
import * as css from 'src/style';

export default class RequestInvite extends Component {

    static navigationOptions = {
        title: 'RequestInvite',
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
                <Text style={css.global.body1}>RequestInvite</Text>
            </View>
        );
    }


}