import React from 'react';
import {
    AppRegistry,
    View,
    StyleSheet,
    Text,
} from 'react-native';

export default class Index extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>hello world</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    },
});
