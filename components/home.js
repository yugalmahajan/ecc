import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView,
    Image
} from 'react-native';
import SendButton from './send-button';
import Device from 'react-native-device-detection';
import ChatBox from './chat-box';

export default class Home extends Component {

    constructor() {

        super();


        this.state = {

            message: '',
            messageStore: [],
        }

    }
    render() {
        return (
            <Image source={require('../assets/images/background-image.jpg')} style={styles.container}>
                <ScrollView style={styles.messageContainer}>

                    {this.chatCreator()}
                </ScrollView>
                <View style={styles.inputContainer}>
                    <View style={styles.input} >
                        <TextInput ref='message' numberOfLines={5} multiline={true} style={{ padding: 10 }}
                            underlineColorAndroid='rgba(0,0,0,0)' placeholder="Type Your Message Here...."
                            onChangeText={(message) => this.setState({ message })}>
                        </TextInput>

                    </View>
                    <View style={styles.buttonContainer}>
                        <SendButton onPress={this.onSendButton.bind(this)} />
                    </View>
                </ View>

            </Image>
        );
    }

    onSendButton() {
        if (this.state.message != '') {
            this.setState({
                messageStore: this.state.messageStore.concat(this.state.message)
            });
        }
    }
    chatCreator() {
        return this.state.messageStore.map((message, index) => {
            return (<ChatBox msg={message} />);
        });
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
        width: Device.width,

    },
    inputContainer: {
        flex: 0.2,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: Device.width,
        marginLeft: 7,
        marginTop: 10,
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