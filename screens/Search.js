import React, { Component } from 'react';
import Category from '../category'
import {
    Dimensions,
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Button,
    StatusBar
} from 'react-native';
import SearchHeader from 'react-native-search-header';
 
const DEVICE_WIDTH = Dimensions.get(`window`).width;
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    },
    status: {
        zIndex: 10,
        elevation: 2,
        width: DEVICE_WIDTH,
        height: 21,
        backgroundColor: '#0097a7'
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        width: DEVICE_WIDTH,
        height: 56,
        marginBottom: 6,
        backgroundColor: '#00bcd4'
    },
    label: {
        flexGrow: 1,
        fontSize: 20,
        fontWeight: `600`,
        textAlign: `left`,
        marginVertical: 8,
        paddingVertical: 3,
        color: `#f5fcff`,
        backgroundColor: `transparent`
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 130,
        height: 40,
        marginTop: 40,
        borderRadius: 2,
        backgroundColor: `#ff5722`
    }
});
 
const Demo = () => {
    const searchHeaderRef = React.useRef(null);
    return (
        <View style = { styles.container }>
            <StatusBar barStyle = 'light-content' />
            <View style = { styles.status }/>
            <View style = { styles.header }>
                <Text style = { styles.label }> Demo </Text>
                <Button
                    title = 'Search'
                    color = '#f5fcff'
                    onPress = {() => searchHeaderRef.current.show()}
                />
            </View>
            <SearchHeader
                ref = { searchHeaderRef }
                placeholder = 'Search...'
                placeholderColor = 'gray'
                pinnedSuggestions = {[ `react-native-search-header`, `react-native`, `javascript` ]}
                onClear = {() => {
                    console.log(`Clearing input!`);
                }}
                onGetAutocompletions = {async (text) => {
                    if (text) {
                        const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&q=${text}`, {
                            method: `get`
                        });
                        const data = await response.json();
                        return data[1];
                    } else {
                        return [];
                    }
                }}
            />
            <View style = { styles.button }>
                <Button
                    title = 'Open Search'
                    color = '#f5fcff'
                    onPress = {() => searchHeaderRef.current.show()}
                />
            </View>
            <View style = { styles.button }>
                <Button
                    title = 'Clear'
                    color = '#f5fcff'
                    onPress = {() => {
                        searchHeaderRef.current.clear();
                    }}
                />
            </View>
        </View>
    );
}
 
AppRegistry.registerComponent('Demo', () => Demo);