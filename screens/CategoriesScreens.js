import React, { Component } from 'react';
import { StyleSheet, Text, View , Button, TextInput} from 'react-native';
import Category from '../category'

export default class CategoriesScreens extends Component {
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
      <View style={styles.category}>
        <Category 
          problemName = 'Arthritis'
        />
        <Category 
          problemName = 'Arm Pain'
        />
      </View>

      <View style={styles.category}>
        <Category 
          problemName = 'Arthritis'
        />
        <Category 
          problemName = 'Arm Pain'
        />
      </View>

      <View style={styles.category}>
        <Category 
          problemName = 'Arthritis'
        />
        <Category 
          problemName = 'Arm Pain'
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
    flexDirection: 'column'
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});
