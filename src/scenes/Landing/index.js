import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, Dimensions, } from 'react-native';

import Images from '@assets/images';
import Button from 'apsl-react-native-button';
import { NavigationActions } from 'react-navigation'

const {width, height} = Dimensions.get('window');

export default class landing extends Component {



    constructor(props) {
        super(props);

        console.log(props);
    }




    render() {
        const { navigate } = this.props.navigation;
        const dashboardAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Dashboard'})
            ]
        })


        return (
            <Image source={Images.lqLandingBackground} style={styles.app}>
                <Image source={Images.landingBackground} style={styles.backgroundImage} >
                        <View style={styles.logoContainer}>
                            <Image source={Images.logo} style={styles.logoImage}/>
                        </View>
                        <View style={styles.footerContainer}>
                            <Image source={Images.textLogo}/>
                            <Text style={styles.sloganText}>connect . discover . influence</Text>
                            <View style={styles.buttonsContainer}>
                                <Button
                                    style={styles.button}
                                    textStyle={{color: "white"}}
                                    onPress={() => navigate('Register')}
                                    accessibilityLabel="Sign Up">Sign Up</Button>
                                <Button
                                    style={styles.button}
                                    textStyle={{color: "white"}}
                                    onPress={() => this.props.navigation.dispatch(dashboardAction)}
                                    accessibilityLabel="Sign In">Sign In</Button>
                        </View>
                        </View>
                </Image>
            </Image>
        );
    }



}

const styles = StyleSheet.create({
    app:{
        width: width,
        height: height,
        backgroundColor: "#000"
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'

    },

    logoContainer: {
        flex: 1,
        width: width,
        height: undefined,
        backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },

    footerContainer: {
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor:'transparent',
        width: width,
        height: undefined,
        paddingBottom: 30,
    },

    sloganText: {
        color: "white",
        fontSize: 20,
        paddingBottom: 20,
    },

    buttonsContainer: {
        flexDirection: 'row',
    },

    button: {
        flex: 1,
        margin: 5,
        borderRadius: 5,
        paddingRight: 5,
        borderColor: "white",
        backgroundColor: "transparent",
    }

});
