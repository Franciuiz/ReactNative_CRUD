import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight,
  ToastAndroid, AlertIOS } from 'react-native';
import { alterar } from '../services/endPoints';

export default class Alterar extends Component {
  constructor(props) {
      super(props);
      this.state = {
        id: '',
        nome: '',
        genero: '',
        ano: ''
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
      alterar(this.state.id, this.state.nome, this.state.genero, this.state.ano);
      ToastAndroid.show('Item modificado com sucesso', ToastAndroid.LONG);
    }
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Alterar um item</Text>

        <Text style={styles.subTitle}>ID (confira aba de listar e copie):</Text>
        <TextInput
            style={styles.itemInput}
            onChangeText={(idp) => this.setState({id: idp})}
          />
        
        <Text style={styles.subTitle}>Novo Nome:</Text>
        <TextInput
            style={styles.itemInput}
            onChangeText={(nomep) => this.setState({nome: nomep})}
          />

        <Text style={styles.subTitle}>Novo Genero:</Text>
        <TextInput
            style={styles.itemInput}
            onChangeText={(generop) => this.setState({genero: generop})}
          />
          
        <Text style={styles.subTitle}>Novo Ano:</Text>
        <TextInput
            style={styles.itemInput}
            onChangeText={(anop) => this.setState({ano: anop})}
          />

        <TouchableHighlight
                style = {styles.button}
                underlayColor= "white"
                onPress = {this.handleSubmit}
              >
              <Text
                  style={styles.buttonText}>
                  Alterar
              </Text>
            </TouchableHighlight>
      </View>
    )
  }
}

Alterar.navigationOptions = {
  title: 'Alterar',
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
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subTitle: {
    marginTop: 10,
    fontSize: 20
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