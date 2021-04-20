import { useState } from 'react';
import createTodo from '../database/createTodo';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase/initFirebase';
import Todo from '../components/Todo';
import TodoList from '../components/TodoList';
import ITodo from '../interfaces/ITodo';
import getTodos from '../database/getTodos';

// Render this
export async function getStaticProps() {
  const initialTodos = await getTodos();
  return {
    props: { initialTodos },
  };
}

export default function TodoPage(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { initialTodos } = props;

  return (
    <div className="my-5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createTodo({ name, description });
          setDescription('');
          setName('');
        }}
        className="flex flex-row content-center justify-between"
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
          className="self-center h-12 px-4 duration-75 ease-in-out border border-gray-400 hover:bg-purple-700 hover:border-transparent hover:text-white transistion"
        >
          +
        </button>
      </form>
      <hr className="my-4"></hr>
      <div className="flex flex-col mt-6 space-y-5">
        <TodoList initialTodos={initialTodos} />
      </div>
    </div>
  );
}
