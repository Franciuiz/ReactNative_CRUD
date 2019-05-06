import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight,
  ToastAndroid, AlertIOS } from 'react-native';
import { adicionar } from '../services/endPoints';

export default class Criar extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
      this.setState({
        name: e.nativeEvent.text
      });
    }
    handleSubmit() {
      adicionar(this.state.name);
      ToastAndroid.show('Item cadastrado com sucesso', ToastAndroid.LONG);
    }
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Adiconar um novo valor</Text>
        <TextInput
              style={styles.itemInput}
              onChange={this.handleChange}
            />
        <TouchableHighlight
                style = {styles.button}
                underlayColor= "white"
                onPress = {this.handleSubmit}
              >
              <Text
                  style={styles.buttonText}>
                  Adicionar
              </Text>
            </TouchableHighlight>
      </View>
    )
  }
}

Criar.navigationOptions = {
  title: 'Adicionar',
}

//CSS
const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#b3e0ff'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor:'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});