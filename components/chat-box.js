import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';

export default class ChatBox extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.chat}>{this.props.msg}</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: '#FFF',
    },
    chat: {
        fontSize: 20
    }
})