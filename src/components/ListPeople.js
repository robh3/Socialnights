import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Container, Thumbnail, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, StyleProvider } from 'native-base';


type Props = {
    value: string,
    placeholder?: string,
    onChangeText: Function,
}

export default function ListPeople(props: Props) {
    return (
        <ScrollView style={styles.container} horizontal
                    showsHorizontalScrollIndicator={false}
        >
            <Thumbnail style={styles.profile} source={{uri: 'https://randomuser.me/api/portraits/women/92.jpg'}} />
            <Thumbnail style={styles.profile} source={{uri: 'https://randomuser.me/api/portraits/men/62.jpg'}} />
            <Thumbnail style={styles.profile} source={{uri: 'https://randomuser.me/api/portraits/women/15.jpg'}} />
            <Thumbnail style={styles.profile} source={{uri: 'https://randomuser.me/api/portraits/women/90.jpg'}} />
            <Thumbnail style={styles.profile} source={{uri: 'https://randomuser.me/api/portraits/men/54.jpg'}} />
            <Thumbnail style={styles.profile} source={{uri: 'https://randomuser.me/api/portraits/women/44.jpg'}} />
            <Thumbnail style={styles.profile} source={{uri: 'https://randomuser.me/api/portraits/women/24.jpg'}} />
            <Thumbnail style={styles.profile} source={{uri: 'https://randomuser.me/api/portraits/men/53.jpg'}} />
            <Thumbnail style={styles.profile} source={{uri: 'https://randomuser.me/api/portraits/men/83.jpg'}} />
            <Thumbnail style={styles.profile} source={{uri: 'https://randomuser.me/api/portraits/women/6.jpg'}} />
            <Thumbnail style={styles.profile} source={{uri: 'https://randomuser.me/api/portraits/women/20.jpg'}} />
            <Thumbnail style={styles.profile} source={{uri: 'https://randomuser.me/api/portraits/women/57.jpg'}} />
            <Thumbnail style={styles.profile} source={{uri: 'https://randomuser.me/api/portraits/women/36.jpg'}} />
            <Thumbnail style={styles.profile} source={{uri: 'https://randomuser.me/api/portraits/women/11.jpg'}} />
            <Thumbnail style={styles.profile} source={{uri: 'https://randomuser.me/api/portraits/women/8.jpg'}} />
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container:{
       padding: 5,
    },
    profile: {
        margin: 5,
    },

    container:{
        marginLeft: 15,
        paddingBottom: 10,
        paddingTop: 5,
    }


});