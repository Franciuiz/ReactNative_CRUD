import { firebaseConfig } from '../config/dbFirebase';
import { ToastAndroid, AlertIOS } from 'react-native';


export const adicionar =  (param1, param2, param3) => {
    const queryPush = firebaseConfig.ref('/jogos').push({
        nome: param1,
        genero: param2,
        ano: param3
    })
    
    const id = queryPush.key;
    //ToastAndroid.show('chave '+id, ToastAndroid.LONG);
    firebaseConfig.ref('/jogos/'+ id +'/id').set(id) //gambiarra HueHue
}

export const alterar = (id, param1, param2, param3) => {
    firebaseConfig.ref('/jogos/'+ id).update({
        nome: param1,
        genero: param2,
        ano: param3
    })
}

export const remover = (id) => {
    firebaseConfig.ref('/jogos/'+ id).remove()
}