import React from 'react';
import { View, Button, Text } from 'react-native';

export const ListarPorId = props =>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Função Listar Por Id</Text>
  </View>


ListarPorId.navigationOptions = {
  title: 'Listar Por Id',
}


export default ListarPorId;