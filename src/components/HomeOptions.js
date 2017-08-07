import React from 'react';
import { ScrollView, View, Image, StyleSheet } from 'react-native';
import { Container, Thumbnail, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, StyleProvider } from 'native-base';


type Props = {
    value: string,
    placeholder?: string,
    onChangeText: Function,
}

export default function HomeOptions(props: Props) {
    return (
        <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>

            <Button small rounded info style={styles.buttonSpace}>
                <Text style={{color: 'white'}}>Today</Text>
            </Button>

            <Button style={styles.buttonSpace} small rounded info>
                <Text style={{color: 'white'}}>Tomorrow</Text>
            </Button>

            <Button style={styles.buttonSpace} small rounded info>
                <Text style={{color: 'white'}}>Trending</Text>
            </Button>

            <Button style={styles.buttonSpace} small rounded info>
                <Text style={{color: 'white'}}>Happy Hours</Text>
            </Button>

            <Button style={styles.buttonSpace} small rounded info>
                <Text style={{color: 'white'}}>Bars</Text>
            </Button>

            <Button style={styles.buttonSpace} small rounded info>
                <Text style={{color: 'white'}}>Clubs</Text>
            </Button>

            <Button style={styles.buttonSpace} small rounded info>
                <Text style={{color: 'white'}}>Sports</Text>
            </Button>

            <Button style={styles.buttonSpace} small rounded info>
                <Text style={{color: 'white'}}>What's New</Text>
            </Button>
        </ScrollView>
    );
}



const styles = StyleSheet.create({

    buttonSpace: {
        marginRight: 5,
    },

    container:{
        marginLeft: 15,
    }


});
