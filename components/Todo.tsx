import { motion } from 'framer-motion';
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
    <motion.div
      onClick={() => toggleTodo()}
      className="flex flex-row content-center justify-between flex-grow p-6 space-x-4 transition duration-75 ease-in-out border border-gray-100 shadow-sm cursor-pointer hover:border-gray-600 hover:shadow-md"
    >
      <div className="flex flex-row content-center justify-between flex-grow space-x-4">
        <div className="self-center w-24 break-words sm:w-60 md:w-60">
          {!editName ? (
            <h2
              onClick={editNameFunc}
              className="text-2xl text-purple-900 hover:bg-gray-200"
            >
              {name}
            </h2>
          ) : (
            <input
              autoFocus={true}
              value={newName}
              onBlur={editNameFinished}
              onChange={(e) => setNewName(e.target.value)}
              className="text-2xl text-purple-900 hover:bg-gray-100"
            ></input>
          )}

          {!editDescription ? (
            <p
              onClick={editDescriptionFunc}
              className="mt-2 text-purple-400 hover:bg-gray-100"
            >
              {description}
            </p>
          ) : (
            <input
              autoFocus={true}
              value={newDescription}
              onBlur={editDescriptionFinished}
              onChange={(e) => setNewDescription(e.target.value)}
              className="mt-2 text-purple-400"
            ></input>
          )}
        </div>
        <p
          className="self-center p-1 text-xs font-bold text-white bg-green-500"
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
        className="self-center h-10 p-4 text-white duration-75 ease-in-out bg-red-700 border border-transparent line-height-adjustment hover:bg-white hover:border-transparent hover:border-red-700 hover:text-black transistion"
      >
        -
      </button>
      <style jsx>{`
        .line-height-adjustment {
          line-height: 0;
        }
      `}</style>
    </motion.div>
  );
}
