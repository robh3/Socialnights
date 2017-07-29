import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Image } from 'react-native';

const {width, height} = Dimensions.get('window');

export default class index extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {

    }


    render() {
        return (
            <View style={styles.app}>

            </View>
        );
    }


}

const styles = StyleSheet.create({
    app: { width, height },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    }
});
