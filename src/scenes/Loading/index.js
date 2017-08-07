import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, } from 'react-native';
import { Container, Spinner } from 'native-base';

const {width, height} = Dimensions.get('window');

export default class index extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {

    }


    render() {



        return (
            <View style={styles.app}>
                <Container>
                        <Spinner />
                </Container>
            </View>
        );
    }


}


const styles = StyleSheet.create({
    app: {
        width: width,
        height: height,
        backgroundColor: "#000"
    },

    backgroundImage: {
        flex: 1,
        backgroundColor: "#000",
        resizeMode: 'cover', // or 'stretch'

    },

});
