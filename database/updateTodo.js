import { db } from '../firebase/initFirebase';

export default function updateTodo(id, data) {
  db.collection('/todos')
    .doc(`${id}`)
    .set(data, { merge: true })
    .catch((err) => {
      console.log(err);
    });
}
