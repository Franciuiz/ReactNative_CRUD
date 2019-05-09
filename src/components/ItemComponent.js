import React, { Component } from 'react';
import { ScrollView, TextInput, View, Text, StyleSheet, ToastAndroid} from 'react-native';
import PropTypes from 'prop-types';


export default class ItemComponent extends Component {

  static propTypes = {
      jogos: PropTypes.array.isRequired
  };

  render() {
    return (
      <ScrollView>
        {this.props.jogos.map((jogos, index) => {
            return (
                <View key={index}>
                  <TextInput style={styles.textInput}
                    defaultValue={jogos.id}
                  />
                    <Text style={styles.jogosText}>Jogo: {jogos.nome}</Text>
                    <Text style={styles.jogosText}>Genero: {jogos.genero}</Text>
                    <Text style={styles.jogosText}>Ano: {jogos.ano}</Text>
                    
                </View>
            )
        })}
      </ScrollView>
    );
  }
}

//CSS
const styles = StyleSheet.create({
  jogosText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
  },
  textInput: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    height: 40,
    fontSize: 20,
    padding: 4,
    marginRight: 5
  }
});