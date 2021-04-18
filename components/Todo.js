import Link from 'next/link';
import { useState } from 'react';
import removeTodo from '../database/removeTodo';
import setComplete from '../database/setComplete';
import updateTodo from '../database/updateTodo';

export default function Todo({ todo }) {
  const { id, name, description, isComplete } = todo;
  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);
  const [editName, setEditN] = useState(false);
  const [editDescription, setEditD] = useState(false);

  function toggleTodo() {
    setComplete(id, !isComplete);
  }

  function editNameFunc(e) {
    e.stopPropagation();
    setEditN(true);
  }

  function editNameFinished() {
    updateTodo(id, { name: newName });
    setEditN(false);
  }

  function editDescriptionFunc(e) {
    e.stopPropagation();
    setEditD(true);
  }

  function editDescriptionFinished() {
    updateTodo(id, { description: newDescription });
    setEditD(false);
  }

  return (
    <div
      onClick={() => toggleTodo()}
      className="flex flex-row space-x-4 justify-between flex-grow content-center border border-gray-100 shadow-sm p-6 hover:border-gray-600 hover:shadow-md transition duration-75 ease-in-out cursor-pointer"
    >
      <div className="flex flex-row space-x-4 justify-between flex-grow content-center">
        <div className="self-center w-24 sm:w-60 md:w-60 break-words">
          {!editName ? (
            <h2
              onClick={editNameFunc}
              className="text-2xl text-purple-900 hover:bg-gray-200"
            >
              {name}
            </h2>
          ) : (
            <input
              autoFocus="true"
              value={newName}
              onBlur={editNameFinished}
              onChange={(e) => setNewName(e.target.value)}
              className="text-2xl text-purple-900 hover:bg-gray-100"
            ></input>
          )}

          {!editDescription ? (
            <p
              onClick={editDescriptionFunc}
              className="text-purple-400 mt-2 hover:bg-gray-100"
            >
              {description}
            </p>
          ) : (
            <input
              autoFocus="true"
              value={newDescription}
              onBlur={editDescriptionFinished}
              onChange={(e) => setNewDescription(e.target.value)}
              className="text-purple-400 mt-2"
            ></input>
          )}
        </div>
        <p
          className="text-xs bg-green-500 text-white font-bold self-center p-1"
          style={{ visibility: isComplete ? 'visible' : 'hidden' }}
        >
          COMPLETE
        </p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          removeTodo(id);
        }}
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
