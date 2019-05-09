import { createMaterialTopTabNavigator } from 'react-navigation';

import ListarTudo from './crud/ListarTudo';
import Criar from './crud/Criar';
import Alterar from './crud/Alterar';
import Deletar from './crud/Deletar';


export default createMaterialTopTabNavigator({
    P1: ListarTudo,
    P2: Criar,
    P3: Alterar,
    P4: Deletar,
}, {
    tabBarOptions: {
        labelStyle: {
            fontSize: 13
        },
        style: {
            backgroundColor: '#006600',
          }
    }
})

