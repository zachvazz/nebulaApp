import React, { Component } from 'react';
import { StyleSheet, Text, View , Button, TextInput} from 'react-native';
import Category from './category'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0,
      count1: 1
    }
  }
  render() {
  return (
    <View style={styles.container}>
      <View>
        <Category 
          problemName = 'Arthritis'
        />
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
