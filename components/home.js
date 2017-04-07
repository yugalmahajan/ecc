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
import Device from 'react-native-device-detection'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.messageContainer}>


                </ScrollView>
                <View style={styles.inputContainer}>
                    <View style={styles.input} >
                        <TextInput ref='message' underlineColorAndroid='rgba(0,0,0,0)' placeholder="Type Your Message Here...." >
                        </TextInput>
                    </View>
                    <View style={styles.buttonContainer}>
                        <SendButton />
                    </View>
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
        flexDirection: 'row',
        marginLeft: 10,

        width: Device.width,
        backgroundColor: 'red'



    },
    input: {
        flex: 0.9,
        height: 50,
        backgroundColor: '#FFF',
        borderColor: 'skyblue',
        borderWidth: 1,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        width: 300,


    },
    messageContainer: {
        flex: 0.8,
    },
    buttonContainer: {

        flex: 0.2,
    }
});