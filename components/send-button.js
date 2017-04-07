import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image
} from 'react-native';

export default class SendButton extends Component {

    render() {

        return (

            <Image source={require('../assets/icons/send-1-icon.png')} style={styles.container}></Image>
        );
    }
}

const styles = StyleSheet.create({

    container: {


        backgroundColor: 'powderblue',
        resizeMode: 'contain',
        height: 47,
        width: 47,
        borderRadius: 22,
        borderWidth: 1,
        marginLeft: 4,


    }
})