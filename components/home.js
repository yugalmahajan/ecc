import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';


export default class Home extends Component {

    render() {

        return (

            <View style={styles.container}>
                <View style={styles.messageContainer}>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput ref='message' style={styles.input} underlineColorAndroid='rgba(0,0,0,0)' >
                    </TextInput>
                </View>


            </View >
        );
    }


}

styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'powderblue'

    },
    inputContainer: {

        flex: 0.1,
        //backgroundColor: 'green',
        marginBottom: 10,
        alignItems: 'center'


    },
    input: {
        height: 50,
        backgroundColor: '#FFF',
        borderColor: 'skyblue',
        borderWidth: 1,
        borderRadius: 5,
        width: 330


    },
    messageContainer: {
        flex: 0.9,

    }
})