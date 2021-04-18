import { useState } from 'react';
import Todo from '../components/Todo';

export default function TodoPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [todoList, setTodoList] = useState([]);

  function createTodo(e) {
    e.preventDefault();
    setTodoList((oldTodoList) => [...oldTodoList, { name, description }]);
    setName('');
    setDescription('');
    //test
  }

  function removeTodo(index) {
    setTodoList((oldTodoList) => [
      ...oldTodoList.slice(0, index),
      ...oldTodoList.slice(index + 1),
    ]);
  }
  return (
    <div className="my-5">
      <form
        onSubmit={createTodo}
        className="flex flex-row justify-between content-center"
      >
        <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <label>
            Name<br></br>
            <input
              type="text"
              value={name}
              className="bg-purple-100"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>
          <label>
            Description<br></br>
            <input
              type="text"
              value={description}
              className="bg-purple-100"
              onChange={(e) => setDescription(e.target.value)}
            ></input>
          </label>
        </div>

        <button
          type="submit"
          className="self-center h-12 border border-gray-400 px-4 hover:bg-purple-700 hover:border-transparent hover:text-white transistion duration-75 ease-in-out"
        >
          +
        </button>
      </form>
      <hr className="my-4"></hr>
      <div className="flex mt-6 flex-col space-y-5">
        {todoList.map((todo, index) => {
          return (
            <div
              key={index}
              className="flex flex-row justify-between space-x-8"
            >
              <Todo todo={todo} />
              <button
                onClick={() => removeTodo(index)}
                className="h-10 line-height-adjustment self-center border border-transparent p-4 bg-red-700 text-white hover:bg-white hover:border-transparent hover:border-red-700 hover:text-black transistion duration-75 ease-in-out"
              >
                -
              </button>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .line-height-adjustment {
          line-height: 0;
        }
      `}</style>
    </div>
  );
}
