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

            <Image source={require('../assets/icons/send-icon.png')} style={styles.container}></Image>
        );
    }
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        // backgroundColor: 'transparent'

    }
})