import { firebaseConfig } from '../config/dbFirebase';

export const adicionar =  (item) => {
    firebaseConfig.ref('/items').push({
        name: item
  });
}

let key = "-Le9S2SD0pGl90KPD7A_"

export const alterar = (item) => {
    //item.getKey();
    firebaseConfig.ref('/items/'+ key).update({
        name: item,
    });
}

export const remover = (item) => {
    //item.getKey();
    firebaseConfig.ref('/items/'+ key).remove();
}




/*
let key = "-LlouZxkW1N3Llt6h5nm"
firebase.database().ref(`users/${userUid}/collection/${key}`).remove()

firebase.database().ref(`users/${userUid}/collection/`).remove(item)

// To Update a user
firebase.database().ref('users/004').update({
    name: 'Pheng Sengvuthy'
});

// To Remove a user
firebase.database().ref('users/004').remove();
*/