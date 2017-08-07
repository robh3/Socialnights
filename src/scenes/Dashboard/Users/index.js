import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, StyleProvider } from 'native-base';

import getTheme from 'socialnights/native-base-theme/components';
import commonColor from 'socialnights/native-base-theme/variables/commonColor';

export default class Users extends Component {


    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {

    }


    render() {
        const {params} = this.props.navigation.state;

        return (
            <StyleProvider style={getTheme(commonColor)}>
                <Container>
                    <Header>
                        <Body>
                        <Title>Users</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content>
                        <Text>
                            User List
                        </Text>
                    </Content>

                </Container>
            </StyleProvider>
        );
    }


}