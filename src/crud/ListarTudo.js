import React, { Component }  from 'react';
import { View, Button, Text, StyleSheet, ToastAndroid } from 'react-native';
import ItemComponent from '../components/ItemComponent';

import { firebaseConfig } from '../config/dbFirebase';

let itemsRef = firebaseConfig.ref('/items');

export default class ListarTudo extends Component {
  state = {
      items: []
  }

  componentDidMount() {
    itemsRef.on('value', (snapshot) => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({items});
    });
  }
    
  render() {
    return (
      <View style={styles.container}>
        {
          this.state.items.length > 0
          ? <ItemComponent items={this.state.items} />
          : <Text>Nenhum Item</Text>
        }
      </View>
    )
  }
}

ListarTudo.navigationOptions = {
  title: 'Listar',
}

//CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#b3e0ff', // #339966 #999966
    padding: 10,
  }
})