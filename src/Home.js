import React from 'react';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import ListarTudo from './crud/ListarTudo';
import ListarPorId from './crud/ListarPorId';
import Criar from './crud/Criar';
import Alterar from './crud/Alterar';
import Deletar from './crud/Deletar';


export default createMaterialTopTabNavigator({
    ListarTudo: ListarTudo,
    P2: Criar,
    P3: Alterar,
    P4: Deletar,
}, {
    tabBarOptions: {
        /*activeTintColor: 'white',
        activeBackgroundColor: '#006600',
        
        inactiveTintColor: 'black',
        inactiveBackgroundColor: '#339966',*/
        labelStyle: {
            fontSize: 13
        },
        style: {
            backgroundColor: '#006600',
          }
    }
})

