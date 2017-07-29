import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

export default class landing extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }



    render() {
        return (
            <Image
                source={require('socialnights/public/images/landing-bg.png')}
                style={styles.backgroundImage} >
                    <Image
                        source={require('socialnights/public/images/logo.png')}
                        style={styles.logoImage}/>
            </Image>
        );
    }



}

const styles = StyleSheet.create({
    app: { width, height },

    container: {
      flex: 1,
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        width: undefined,
        height: undefined,
        backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoImage: {

    }
});
