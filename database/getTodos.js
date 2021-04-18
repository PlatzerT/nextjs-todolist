import { db } from '../firebase/initFirebase';

export default async function getTodos() {
  const ref = db.collection('/todos');
  return (await ref.get()).docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
}
