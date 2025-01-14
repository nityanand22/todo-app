import { useState } from "react";

const Body = () => {
  const [text, setText] = useState("");
  const [listOfTask, setListOfTask] = useState([]);

  function edit(res) {
    let index = listOfTask.findIndex((w) => w === res);
    let item = listOfTask.splice(index, 1);
    setText(item);
  }

  function deleteTask(res) {
    let filterList = listOfTask.filter((w) => w !== res);
    setListOfTask(filterList);
  }

  function addTask(res) {
    let arrayOfTask = [...listOfTask];
    arrayOfTask.push(res);
    setText("");
    setListOfTask(arrayOfTask);
  }

  return (
    <div className="min-h-screen flex flex-col items-center  bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">To Do App</h1>

      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-5">
        <div className="mb-5">
          <input
            type="text"
            value={text}
            placeholder="Enter your task"
            onChange={(e) => setText(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => addTask(text)}
            className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add Task
          </button>
        </div>

        <div className="task-container">
          {listOfTask.length === 0 ? (
            <p className="text-center text-gray-500">No tasks available!</p>
          ) : (
            <ul className="space-y-4">
              {listOfTask.map((task, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm"
                >
                  <span className="text-gray-700">{task}</span>
                  <div className="space-x-2">
                    <button
                      onClick={() => edit(task)}
                      className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTask(task)}
                      className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
