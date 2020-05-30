import React, { Component } from 'react';
import {StyleSheet, View, Image, Text, } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidView behavior="padding" style={styles.container}>
                <View style={StyleSheet.container}>
                    <View stlye={styles.logoContainer}>
                        <Image 
                        style={styles.logo}
                        source={require('../../assets/blank logo.png')}
                        />
                        <Text style={styles.titile}>An app made for online physiotherapy</Text>
                    </View>
                    <View style={styles.logoContainer}>
                    <LoginForm />
                    </View>
                </View>
            </KeyboardAvoidView>
       );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8DC'    
    },
    logoContainer: {
        alignItems:'center',
        flexGrow: 1,
        justifyContent : 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#000000',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9
    }
});