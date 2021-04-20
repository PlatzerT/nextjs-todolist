import { db } from '../firebase/initFirebase';
import ITodo from '../interfaces/ITodo';

export default async function getTodos() {
  const ref = db.collection('/todos').orderBy('createdAt');
  return (await ref.get()).docs.map((doc) => {
    let int: ITodo = {
      id: doc.id,
      name: doc.data().name,
      description: doc.data().description,
      createdAt: doc.data().createdAt.toString(),
    };
    return int;
  });
}
