import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableHighlight
} from 'react-native';

export default class SendButton extends Component {

    render() {

        return (

            <TouchableHighlight onPress={this.props.onPress}>
                <Image source={require('../assets/icons/icons_send-128.png')} style={styles.container}></Image>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({

    container: {


        //backgroundColor: 'powderblue',
        resizeMode: 'contain',
        height: 47,
        width: 47,
        borderRadius: 22,
        borderWidth: 1,
        marginLeft: 4,


    }
})