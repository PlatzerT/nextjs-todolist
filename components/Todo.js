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
      className="flex flex-row justify-between content-center flex-grow border border-gray-100 shadow-sm p-6 hover:border-gray-600 hover:shadow-md transition duration-75 ease-in-out cursor-pointer"
    >
      <div className="self-center">
        <h2 className="text-2xl text-purple-900">{name}</h2>
        <p className="text-purple-400 mt-2">{description}</p>
      </div>

      <div className="self-center flex flex-row content-center space-x-4">
        {isComplete && (
          <p className="text-xs bg-green-500 text-white font-bold self-center p-1">
            COMPLETE
          </p>
        )}
      </div>
    </div>
  );
}
