import React from 'react';
import { ScrollView, View, Image, StyleSheet } from 'react-native';
import { Container, Thumbnail, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, StyleProvider } from 'native-base';


type Props = {
    value: string,
    placeholder?: string,
    onChangeText: Function,
}

export default function Featured(props: Props) {
    return (

        <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
            <Image style={styles.item} source={{uri: 'https://www.filepicker.io/api/file/7htXzIYSLOn752tyCXrD'}}/>
            <Image style={styles.item} source={{uri: 'https://www.filepicker.io/api/file/wLyigyDrRUmtXbiFF3a7'}}/>
            <Image style={styles.item} source={{uri: 'https://www.filepicker.io/api/file/PJSP1tVZT6ibUL43qunj'}}/>
            <Image style={styles.item} source={{uri: 'https://www.filepicker.io/api/file/DExb2x26STaTo1NLzGVd'}}/>
            <Image style={styles.item} source={{uri: 'https://www.filepicker.io/api/file/ZyiBRuVTI2PNhsvnRwKa'}}/>
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
