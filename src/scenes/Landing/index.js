import React, { Component } from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

export default class landing extends Component {

    constructor(props) {
        super(props)
        console.log(props)
    }



    render() {
        return (
            <View style={styles.app}>
                <Image source={require('socialnights/public/images/splash-bg.png')} style={styles.backgroundImage} />
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
