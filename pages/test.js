import getTodos from '../database/getTodos';
import {
  useCollectionData,
  useDocumentData,
  useCollection,
} from 'react-firebase-hooks/firestore';
import { db } from '../firebase/initFirebase';
import Todo from '../components/Todo';

export async function getStaticProps() {
  const ref = db.collection('/todos');
  const todos = (await ref.get()).docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return {
    props: { todos },
  };
}

export default function test(props) {
  const ref = db.collection('/todos');
  const [todos, loading, error] = useCollection(ref, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  console.log(props.todos);
  return (
    <div>
      {!loading
        ? todos.docs.map((todo) => {
            return (
              <div key={todo.id}>
                <p>{todo.id}</p>
                <Todo todo={todo.data()} />
              </div>
            );
          })
        : props.todos.map((todo) => {
            return (
              <div key={todo.id}>
                <p>{todo.id}</p>
                <Todo todo={todo} />
              </div>
            );
          })}
    </div>
  );
}
