import React, { Component } from 'react';
import { StyleSheet, Image, View, Dimensions, Alert, } from 'react-native';
import { Container, Form, Item, Label, Input, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, StyleProvider } from 'native-base';

import getTheme from 'socialnights/native-base-theme/components';
import commonColor from 'socialnights/native-base-theme/variables/commonColor';

const {height: screenHeight} = Dimensions.get('window');

export default class index extends Component {



    static navigationOptions = {
        title: 'Get on the list',
    }

    constructor(props) {
        super(props);
        console.log(props);



        this.state = {
            email: '',
            mobile: '',
            lastName: '',
            firstName:'',
            password: '',
            confirmPassword: '',
        }

    }

    componentDidMount() {

    }



    render() {
        return (
            <StyleProvider style={getTheme(commonColor)}>
            <Container>
                <Content s>

                <Text style={{ padding: 15}}>Enter your info below and be the first to get on the waitlist for Socialnights.</Text>

                    <Form>
                        <Item>
                            <Input
                                placeholder="First Name"
                                onChangeText={(text) => this.firstName = text} />
                        </Item>
                        <Item>
                            <Input
                                placeholder="Last Name"
                                onChangeText={(text) => this.lastName = text} />
                        </Item>
                        <Item>
                            <Input
                                placeholder="Email"
                                onChangeText={(text) => this.email = text} />
                        </Item>

                        <Item>
                            <Input
                                placeholder="Mobile No."
                                onChangeText={(text) => this.setState({mobile: text})} />
                        </Item>
                    </Form>

                    <View style={{ justifyContent: 'center'}}>
                        <Button style={{margin: 15}}>
                            <Text style={{color: 'white', fontWeight: '700'}}> REQUEST ACCESS</Text>
                        </Button>
                    </View>




                </Content>
            </Container>
            </StyleProvider>
        );
    }


}

const styles = StyleSheet.create({

    formContainer: {
        flex: 1,
        width: 335,
        height: undefined,
        marginTop: 100,
        backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },

    regButton: {
        paddingTop: 15,
        paddingBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

});