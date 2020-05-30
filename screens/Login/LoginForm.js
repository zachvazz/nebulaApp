import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                 barStyle="light-content"
                />
                <TextInput 
                placeholder="username or email"
                />
                 <TextInput 
                 placeholder="password"
                />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#000000',
        paddingHorizontal: 10
    }, 
    buttonContainer: {
        backgroundColor: '#CC6600',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
});