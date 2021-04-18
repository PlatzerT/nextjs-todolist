import { db } from '../firebase/initFirebase';

export default function createTodo(data) {
  db.collection('/todos')
    .add(data)
    .then((result) => {
      console.log('hgfh');
      console.log(result.id);
    })
    .catch((err) => {
      console.log(err);
    });
}
