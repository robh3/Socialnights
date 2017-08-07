import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Container, Thumbnail, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, StyleProvider } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import getTheme from 'socialnights/native-base-theme/components';
import commonColor from 'socialnights/native-base-theme/variables/commonColor';

import ListPeople from 'src/components/ListPeople';
import Billboard from 'src/components/Billboard';
import HomeOptions from 'src/components/HomeOptions';
import UpcomingEvents from 'src/components/UpcomingEvents';
import Featured from 'src/components/Featured';
import Venues from 'src/components/Venues';

var ads = [
    'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
    'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
    'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024',
    'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
    'https://images.unsplash.com/photo-1441126270775-739547c8680c?h=1024',
    'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?h=1024',
    'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024'
];

var events = [
    'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
    'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
    'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024',
    'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
    'https://images.unsplash.com/photo-1441126270775-739547c8680c?h=1024',
    'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?h=1024',
    'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024'
];


export default class Home extends Component {

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
                    <Title>Dallas/Ft. Worth <Icon name='md-arrow-dropdown' style={{fontSize: 15}}/></Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='search' />
                        </Button>
                    </Right>
                </Header>

                <Content>
                    <ListPeople/>
                    <Billboard/>
                    <View style={{marginBottom: 15}}/>
                    <HomeOptions/>
                    <View style={{marginBottom: 15}}/>
                    <View style={{marginBottom: 15, marginLeft: 10}}><Text style={{fontWeight: '700'}}> Featured Events </Text></View>
                    <Featured />
                    <View style={{marginBottom: 30}}/>
                    <View style={{marginBottom: 15, marginLeft: 10}}><Text style={{fontWeight: '700'}}> Editors Picks </Text></View>
                    <UpcomingEvents/>
                    <View style={{marginBottom: 30}}/>
                    <View style={{marginBottom: 15, marginLeft: 10}}><Text style={{fontWeight: '700'}}> Venues </Text></View>
                    <Venues />
                </Content>

            </Container>
            </StyleProvider>
        );
    }


}