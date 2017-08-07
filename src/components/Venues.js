import React from 'react';
import { ScrollView, View, Image, StyleSheet } from 'react-native';
import { Container, Thumbnail, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, StyleProvider } from 'native-base';


type Props = {
    value: string,
    placeholder?: string,
    onChangeText: Function,
}

export default function Venues(props: Props) {
    return (

        <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
            <Image style={styles.item} source={{uri: 'https://www.clubcrawlers.com/designedit/cache/venues/1414/744_11253945_1467543380233550_238289471413267617_n.jpg'}}/>
            <Image style={styles.item} source={{uri: 'https://www.clubcrawlers.com/designedit/cache/venues/205/744_Revivalimg3.jpg'}}/>
            <Image style={styles.item} source={{uri: 'https://www.clubcrawlers.com/designedit/cache/venues/883/744_cubepatio2.jpg'}}/>
            <Image style={styles.item} source={{uri: 'https://www.clubcrawlers.com/designedit/cache/venues/1344/1000_venue_2.JPG'}}/>
            <Image style={styles.item} source={{uri: 'https://www.clubcrawlers.com/designedit/cache/venues/685/744_MaiImg5.jpg'}}/>
        </ScrollView>
    );
}



const styles = StyleSheet.create({

    item:{
        width: 150,
        height: 200,
        marginRight: 15,
        resizeMode: 'cover',

    },

    container:{
        marginLeft: 15,
    }


});
