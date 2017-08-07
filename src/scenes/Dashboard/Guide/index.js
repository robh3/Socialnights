import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, StyleProvider } from 'native-base';

import getTheme from 'socialnights/native-base-theme/components';
import commonColor from 'socialnights/native-base-theme/variables/commonColor';

export default class Guide extends Component {


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
                        <Title>Guide</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content>
                        <Text>
                            VIP stuff
                        </Text>
                    </Content>

                </Container>
            </StyleProvider>
        );
    }


}