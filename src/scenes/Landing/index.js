import React, { Component } from 'react';
import { StyleSheet, Image, View, Dimensions, Alert, } from 'react-native';
import { Container, Grid, Col, Thumbnail, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, StyleProvider } from 'native-base';
import { Constants, Facebook, Google } from 'expo';

import Images from 'assets/images';
import { NavigationActions } from 'react-navigation'

import getTheme from 'socialnights/native-base-theme/components';
import commonColor from 'socialnights/native-base-theme/variables/commonColor';

const {width, height} = Dimensions.get('window');

export default class landing extends Component {



    constructor(props) {
        super(props);



        console.log(props);


    }

    _navigateTo = (routeName: string, params: object) => {
        const actionToDispatch = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName }, params)]
        })
        this.props.navigation.dispatch(actionToDispatch)
    }



    _handleFacebookLogin = async () => {
        try {
            const { type, token } = await Facebook.logInWithReadPermissionsAsync(
                '564874816917428', // Replace with your own app id in standalone app
                { permissions: ['public_profile'] }
            );

            switch (type) {
                case 'success': {
                    // Get the user's name using Facebook's Graph API
                    const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                    const profile = await response.json();
                    this._navigateTo('Dashboard', profile);
                    break;
                }
                case 'cancel': {
                    Alert.alert(
                        'Cancelled!',
                        'Login was cancelled!',
                    );
                    break;
                }
                default: {
                    Alert.alert(
                        'Oops!',
                        'Login failed!',
                    );
                }
            }
        } catch (e) {
            Alert.alert(
                'Oops!',
                'Login failed!',
            );
        }
    };


    _handleGoogleLogin = async () => {
        try {
            const { type, user } = await Google.logInAsync({
                androidStandaloneAppClientId: '<ANDROID_CLIENT_ID>',
                iosStandaloneAppClientId: '<IOS_CLIENT_ID>',
                androidClientId: '887738336141-lmkee3uia0jhep19vgagdtvlku2gqme7.apps.googleusercontent.com',
                iosClientId: '887738336141-b38lgupgujitu35li7nohqrl1ikt938e.apps.googleusercontent.com',
                scopes: ['profile', 'email']
            });

            switch (type) {
                case 'success': {
                    this._navigateTo('Dashboard');
                    break;
                }
                case 'cancel': {
                    Alert.alert(
                        'Cancelled!',
                        'Login was cancelled!',
                    );
                    break;
                }
                default: {
                    Alert.alert(
                        'Oops!',
                        'Login failed!',
                    );
                }
            }
        } catch (e) {
            Alert.alert(
                'Oops!',
                'Login failed!',
            );
        }
    };



    render() {

        const { navigate } = this.props.navigation;

        return (
            <StyleProvider style={getTheme(commonColor)}>
            <Container>
                <Image source={Images.lqLandingBackground} style={styles.backgroundImage} >
                        <View style={styles.logoContainer}>
                            <Image source={Images.logo} style={styles.logoImage}/>
                            <Text style={styles.tagline1}>Get together.</Text>
                            <Text style={styles.tagline2}>By invite only</Text>

                            <View style={styles.facebookSignIn}>
                            <Button onPress={this._handleFacebookLogin} style={{width: 300, justifyContent: 'center'}} >
                                <Icon name='logo-facebook' style={{fontSize: 15, color: '#fff'}}/><Text style={{color: 'white', fontWeight: '700'}}> SIGN IN WITH FACEBOOK</Text>
                            </Button>
                            </View>

                            <View style={styles.googleSignIn}>
                                <Button danger onPress={this._handleGoogleLogin} style={{width: 300, justifyContent: 'center'}} >
                                    <Icon name='logo-google' style={{fontSize: 15, color: '#fff'}}/><Text style={{color: 'white', fontWeight: '700'}}>SIGN IN WITH GOOGLE</Text>
                                </Button>
                            </View>

                            <Text style={styles.tagline2}>Enter your invite code after signing in</Text>

                        </View>
                        <View style={styles.footerContainer}>

                            <Image style={styles.logoText} source={Images.textLogo}/>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.noInvite}>No invite? </Text>
                                <Text onPress={() => navigate('Register')} style={styles.requestOne}>Request one</Text>
                            </View>


                        </View>

                </Image>
            </Container>
            </StyleProvider>
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
        backgroundColor: "#000",
        resizeMode: 'cover', // or 'stretch'

    },

    facebookSignIn: {
        paddingTop: 15,
        paddingBottom: 5,

    },

    googleSignIn: {
        paddingTop: 10,
        paddingBottom: 10,

    },

    logoContainer: {
        flex: 1,
        width: width,
        height: undefined,
        marginTop: 100,
        backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoImage: {
        marginBottom: 20,
    },

    logoText: {
        marginBottom: 0,
    },

    footerContainer: {
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor:'transparent',
        width: width,
        height: undefined,
        paddingBottom: 15,
    },

    sloganText: {
        color: "white",
        fontSize: 18,
        paddingBottom: 5,
    },

    tagline1: {
        color: "white",
        fontWeight: "700",
        fontSize: 20,
    },
    tagline2: {
        color: "#ccc",
        fontSize: 14,
        paddingBottom: 10,
    },
    tagline3: {
        color: "white",
        fontSize: 14,
        paddingTop: 10,
    },

    noInvite: {
        color: "#ccc",
        fontSize: 14,
        paddingBottom: 5,
    },

    requestOne: {
        color: "#039BE5",
        fontSize: 14,
        paddingBottom: 5,
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
