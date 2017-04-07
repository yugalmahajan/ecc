import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView
} from 'react-native';
import SendButton from './send-button';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.messageContainer}>


                </ScrollView>
                <View style={styles.inputContainer}>
                    <TextInput ref='message' style={styles.input} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Type Your Message Here...." >
                    </TextInput>
                    <SendButton />
                </ View>

            </View>
        );
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'powderblue',
    },
    inputContainer: {
        flex: 0.1,
        marginBottom: 10,
        alignItems: 'center',


    },
    input: {
        height: 50,
        backgroundColor: '#FFF',
        borderColor: 'skyblue',
        borderWidth: 1,
        borderRadius: 5,
        width: 330,
    },
    messageContainer: {
        flex: 0.9,
    },
});