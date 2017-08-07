import React from 'react';
import { ScrollView, View, Image, StyleSheet } from 'react-native';
import { Container, Thumbnail, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, StyleProvider } from 'native-base';


type Props = {
    value: string,
    placeholder?: string,
    onChangeText: Function,
}

export default function UpcomingEvents(props: Props) {
    return (

        <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
            <Image style={styles.item} source={{uri: 'https://www.filepicker.io/api/file/0cazdROHQ9MPt7QDJ1D0'}}/>
            <Image style={styles.item} source={{uri: 'https://www.filepicker.io/api/file/SXCFTAjTzGN0uFeUABGR'}}/>
            <Image style={styles.item} source={{uri: 'https://www.filepicker.io/api/file/YMy2dkhdR6iVQUoSvFOu'}}/>
            <Image style={styles.item} source={{uri: 'https://www.filepicker.io/api/file/ZnxeTQh8T2duQNErpVQ7'}}/>
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
