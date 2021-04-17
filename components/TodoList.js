import Todo from './Todo';

export default function TodoList({ todoList }) {
  return (
    <div className="flex mt-6 flex-col space-y-5">
      {todoList.map((todo, index) => {
        todo['id'] = index;
        return <Todo key={index} todo={todo} />;
      })}
    </div>
  );
}
