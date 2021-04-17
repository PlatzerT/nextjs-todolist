import Head from 'next/head';
import { useState } from 'react';
import TodoList from '../components/TodoList';

export default function Home() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [todoList, setTodoList] = useState([]);

  function createTodo(e) {
    e.preventDefault();
    setTodoList((oldTodoList) => [...oldTodoList, { name, description }]);

    setName('');
    setDescription('');
    console.log(todoList);
  }

  return (
    <div className="my-5">
      <form onSubmit={createTodo} className="flex flex-row justify-around">
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

        <button
          type="submit"
          className="border border-gray-400 px-4 hover:bg-purple-700 hover:border-transparent hover:text-white transistion duration-75 ease-in-out"
        >
          +
        </button>
      </form>
      <ul>
        <TodoList todoList={todoList} />
      </ul>
    </div>
  );
}
