import { db, firebase } from '../firebase/initFirebase';

export default function createTodo(data) {
  db.collection('/todos')
    .add({
      ...data,
      isComplete: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .catch((err) => {
      console.log(err);
    });
}
