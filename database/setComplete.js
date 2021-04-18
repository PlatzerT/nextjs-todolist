import { db } from '../firebase/initFirebase';

export default function setComplete(id, status) {
  db.collection('/todos')
    .doc(`${id}`)
    .set(
      {
        isComplete: status,
      },
      { merge: true }
    )
    .catch((err) => {
      console.log(err);
    });
}
