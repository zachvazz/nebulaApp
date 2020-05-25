import React, { Component } from 'react';
import { StyleSheet, Text, View , Button, TextInput, Image} from 'react-native';

export default class Category extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <View>
                {/* <Image 
                
                /> */}
                <Text>{this.props.problemName}</Text>
            </View>
        )
    }
}
