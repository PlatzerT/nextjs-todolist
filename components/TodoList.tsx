import { useCollection } from 'react-firebase-hooks/firestore';
import Todo from './Todo';
import { db } from '../firebase/initFirebase';

export default function TodoList({ initialTodos }) {
  // Collection reference
  const ref = db.collection('/todos');
  const [todos, loading, error] = useCollection(
    ref.orderBy('createdAt', 'asc'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <div className="flex flex-col space-y-4">
      {!loading
        ? todos.docs.map((todo) => {
            return (
              <Todo key={todo.id} todo={{ ...todo.data(), id: todo.id }} />
            );
          })
        : initialTodos.map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
    </div>
  );
}
