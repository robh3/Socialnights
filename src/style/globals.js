import { StyleSheet, } from 'react-native';

export const global = StyleSheet.create(
    {
        v_container: {
            flex: 1,
            padding: 8,
            flexDirection: 'column', // main axis
            justifyContent: 'center', // main axis
            alignItems: 'center', // cross axis
            backgroundColor: colors.text_light,
        },
        title: {
            flex: -1, // shrink to min height & width if needed
            marginTop: 8,
            marginLeft: 8,
            marginRight: 8,
            marginBottom: 4,
            fontSize: values.font_title_size,
            color: colors.text_dark,
            fontFamily: values.font_title, // more info https://goo.gl/7wYazn
        },
        body1: {
            flex: -1,
            marginTop: 4,
            marginLeft: 8,
            marginRight: 8,
            marginBottom: 8,
            fontFamily: values.font_body, // more info https://goo.gl/7wYazn
            fontSize: values.font_body_size,
            color: colors.text_medium,
        },
        h_container: {
            flex: -1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignSelf: 'stretch', // overrides container alignItems
            backgroundColor: colors.background_medium,
            padding: 16,
        },
        icon: {
            flex: -1,
            margin: 8,
            height: 100,
            width: 75,
            resizeMode: 'contain', //'cover' | 'contain'
        },
    });