import React from 'react';
import { ScrollView, View, Image, StyleSheet } from 'react-native';
import { Container, Card, CardItem, Thumbnail, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, StyleProvider } from 'native-base';


type Props = {
    value: string,
    placeholder?: string,
    onChangeText: Function,
}

export default function Billboard(props: Props) {
    return (

        <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
            <Image style={styles.ad} source={{uri: 'https://scontent-dft4-1.cdninstagram.com/t51.2885-15/s320x320/e35/20589490_1989195147981254_1964605130242260992_n.jpg'}}/>
            <Image style={styles.ad} source={{uri: 'https://www.filepicker.io/api/file/wLyigyDrRUmtXbiFF3a7'}}/>
            <Image style={styles.ad} source={{uri: 'https://www.filepicker.io/api/file/PJSP1tVZT6ibUL43qunj'}}/>
            <Image style={styles.ad} source={{uri: 'https://www.filepicker.io/api/file/DExb2x26STaTo1NLzGVd'}}/>
            <Image style={styles.ad} source={{uri: 'https://www.filepicker.io/api/file/ZyiBRuVTI2PNhsvnRwKa'}}/>
        </ScrollView>

    );
}



const styles = StyleSheet.create({
    ad:{
        width: 330,
        height: 250,
        marginRight: 15,
        resizeMode: 'cover',
        borderRadius: 15,
    },
    container: {
        padding: 3,
        marginLeft: 15,
    }


});
