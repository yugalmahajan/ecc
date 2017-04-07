import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class ChatBox extends Component {
    render() {
        return (
            <View>
                <Text style={styles.chat}>{this.props.msg}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    chat: {
        backgroundColor: '#F0F0F0',
        borderRadius: 4,
        fontSize: 16,
        marginTop: 8,
        marginLeft: 8,
        padding: 8,
        width: 256
    }
});