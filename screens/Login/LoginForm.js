import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

export default class LoginForm extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <StatusBar
                 barStyle="light-content"
                />
                <TextInput 
                placeholder="username or email"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={StyleSheet.input}
                />
                 <TextInput 
                 placeholder="password"
                 placeholderTextColor="rgba(255,255,255,0.7)"
                 returnKeyType="go"
                 secureTextEntry
                 style={StyleSheet.input}
                 ref={(input) => this.passwordInput = input}
                />

                <TouchableOpacity style={StyleSheet.buttonContainer}>
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
        backgroundColor: 'rgba(255,255,255,0.2',
        marginBotton: 10,
        color: '#000000',
        paddingHorizontal: 10
    }, 
    buttonContainer: {
        backgroundColor: '#CC6600',
        paddintVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
});