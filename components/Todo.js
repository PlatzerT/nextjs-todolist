import Link from 'next/link';
import { useState } from 'react';

export default function Todo({ todo }) {
  const { name, description } = todo;
  const [isComplete, setIsComplete] = useState(false);

  function toggleTodo() {
    setIsComplete(!isComplete);
  }

  return (
    <div
      onClick={toggleTodo}
      className="flex flex-row space-x-4 justify-between flex-grow content-center border border-gray-100 shadow-sm p-6 hover:border-gray-600 hover:shadow-md transition duration-75 ease-in-out cursor-pointer"
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
      <style jsx>{`
        .ok {
        }
      `}</style>
    </div>
  );
}
