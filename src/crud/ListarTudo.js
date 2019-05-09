import React, { Component }  from 'react';
import { View, ScrollView, Text, StyleSheet, ToastAndroid } from 'react-native';
import ItemComponent from '../components/ItemComponent';

import { firebaseConfig } from '../config/dbFirebase';


let jogosRef = firebaseConfig.ref('/jogos');

export default class ListarTudo extends Component {
  state = {
      jogos: []
  }

  componentDidMount() {
    jogosRef.on('value', (snapshot) => {
      let data = snapshot.val();
      let jogos = Object.values(data);
      this.setState({jogos});
    });
  }
    //{ToastAndroid.show(this.state.jogos.length + 'valores encontrados', ToastAndroid.SHORT)}
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        
        <Text style={styles.textCount}>
          {this.state.jogos.length + ' registros encontrados'}
        </Text>
        {
          this.state.jogos.length > 0
          ? <ItemComponent jogos={this.state.jogos} />
          : <Text style={styles.textVazio}>Nenhum Registro</Text>
        }
        
      </ScrollView>
    )
  }
}

ListarTudo.navigationOptions = {
  title: 'Listar',
  
}



//CSS
const styles = StyleSheet.create({
  textCount:{
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
  textVazio:{
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 100
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#b3e0ff', // #339966 #999966 #b3e0ff
    padding: 10,
    paddingVertical: 20
  }
})