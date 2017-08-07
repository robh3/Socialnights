import {Constants} from "expo";
import React from "react";
import {StyleSheet, Platform, Dimensions} from "react-native";

export const colors = {
    "background_dark": '#000',
    "background_medium": '#121212',
    "background_light": '#d9e3f0',
    "button_bg": '#0693e3',
    "button_fg": '#d9e3f0',
    "text_light": '#d9d9d9',
    "text_medium": '#666',
    "text_dark": '#000',
};

export const values = {
    "font_title": 'default',
    "font_body": 'default',
    "font_body_size": 14,
    "font_title_size": 20,
    'border_radius': 2,
};

export const global = StyleSheet.create(
    {
        v_container: {
            flex: 1,
            padding: 8,
            flexDirection: 'column', // main axis
            justifyContent: 'flex-start', // main axis
            alignItems: 'flex-start', // cross axis
            backgroundColor: colors.background_medium,
        },
        title: {
            flex: -1, // shrink to min height & width if needed
            marginTop: 8,
            marginLeft: 8,
            marginRight: 8,
            marginBottom: 4,
            fontSize: values.font_title_size,
            color: colors.text_dark,
            //fontFamily: values.font_title, // more info https://goo.gl/7wYazn
        },
        body1: {
            flex: -1,
            marginTop: 4,
            marginLeft: 8,
            marginRight: 8,
            marginBottom: 8,
            //fontFamily: values.font_body, // more info https://goo.gl/7wYazn
            fontSize: values.font_body_size,
            color: colors.text_light,
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

// more info https://goo.gl/dqw4jF
export const header = {
    // background
    headerStyle: {
        backgroundColor: colors.background_dark,
        ...Platform.select({
            android: {
                height: Constants.statusBarHeight + 56,
               paddingTop: Constants.statusBarHeight,
            }
        }),
    },
    // arrows
    headerTintColor: colors.text_light,
    // my own styles for titleAndIcon
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 8,
    },
    // my own styles for titleAndIcon
    text: {
        paddingLeft: 8,
        color: colors.text_light,
        //fontFamily: values.font_body,
        //fontSize: values.font_title_size,
    }

};

// more info https://goo.gl/eawcVg
export const tabs = {
        showIcon: true,
        showLabel: false,
        activeTintColor: colors.button_fg,
        inactiveTintColor: colors.text_medium,
        style: {
            backgroundColor: colors.background_dark,
            ...Platform.select({
                android: {
                    height: 56,
                }
            })
        },
        indicatorStyle: {
            backgroundColor: colors.button_fg
        }


};
