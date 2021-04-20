import { useCollection } from "react-firebase-hooks/firestore";
import Todo from "./Todo";
import { db } from '../firebase/initFirebase';

export default function TodoList({ initialTodos }) {
// Collection reference
  const ref = db.collection('/todos');
  const [todos, loading, error] = useCollection(ref, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
    return (
        <div>
            {!loading
          ? todos.docs.map((todo) => {
              return (
                <div key={todo.id}>
                  <Todo todo={{ ...todo.data(), id: todo.id }} />
                </div>
              );
            })
          : initialTodos.map((todo) => {
              return (
                <div key={todo.id}>
                  <Todo todo={todo} />
                </div>
              );
            })}
        </div>
    )
}
