import { db } from '../firebase/initFirebase';

export default function createTodo(data) {
  db.collection('/todos')
    .add({
      ...data,
      isComplete: false,
    })
    .catch((err) => {
      console.log(err);
    });
}
