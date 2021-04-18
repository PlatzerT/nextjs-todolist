import Link from 'next/link';
import { useState } from 'react';
import removeTodo from '../database/removeTodo';
import setComplete from '../database/setComplete';

export default function Todo({ todo }) {
  const { id, name, description } = todo;
  const [isComplete, setIsComplete] = useState(false);

  function toggleTodo() {
    setIsComplete(!isComplete);
    setComplete(id, isComplete);
  }

  return (
    <div className="flex flex-row space-x-4 justify-between flex-grow content-center border border-gray-100 shadow-sm p-6 hover:border-gray-600 hover:shadow-md transition duration-75 ease-in-out cursor-pointer">
      <div
        onClick={() => toggleTodo()}
        className="flex flex-row space-x-4 justify-between flex-grow content-center"
      >
        <div className="self-center w-24 sm:w-60 md:w-60 break-words">
          <h2 className="text-2xl text-purple-900">{name}</h2>
          <p className="text-purple-400 mt-2">{description}</p>
        </div>
        <p
          className="text-xs bg-green-500 text-white font-bold self-center p-1"
          style={{ visibility: isComplete ? 'visible' : 'hidden' }}
        >
          COMPLETE
        </p>
      </div>
      <button
        onClick={() => removeTodo(id)}
        className="h-10 line-height-adjustment self-center border border-transparent p-4 bg-red-700 text-white hover:bg-white hover:border-transparent hover:border-red-700 hover:text-black transistion duration-75 ease-in-out"
      >
        -
      </button>
      <style jsx>{`
        .line-height-adjustment {
          line-height: 0;
        }
      `}</style>
    </div>
  );
}
