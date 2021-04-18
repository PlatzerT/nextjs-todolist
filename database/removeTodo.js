import { db } from '../firebase/initFirebase';

export default function removeTodo(id) {
  db.collection('/todos')
    .doc(`${id}`)
    .delete()
    .catch((err) => {
      console.log(err);
    });
}
