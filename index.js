import React from 'react';
import {
    AppRegistry,
    View,
    StyleSheet,
    Text,
} from 'react-native';
import Home from './components/home';

export default class Index extends React.Component {
    render() {
        return (
            
                <Home />
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    },

});
