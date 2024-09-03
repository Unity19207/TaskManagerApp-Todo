import React, { useState, useEffect } from "react";
import MainContent from "./MainContent";
import toast, { Toaster } from "react-hot-toast";
import Updatetodo from "./Updatetodo";
import axios from "axios";

let id = sessionStorage.getItem("id");

function Todo() {
  const [updateDisplay, setUpdateDisplay] = useState(false);
  const [updateTaskId, setUpdateTaskId] = useState(null);
  const [toUpdateArray, setToUpdateArray] = useState(null);
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    time: "",
  });
  const [array, setArray] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  const change = (e) => {
    const { name, value } = e.target;
    const time = new Date().toString().slice(0, 21);
    setInputs({ ...inputs, time, [name]: value });
  };

  const submit = async () => {
    if (id) {
      try {
        await axios.post(`${window.location.origin}/api/v2/addTask`, {
          title: inputs.title,
          description: inputs.description,
          time: inputs.time,
          id: id,
        });
        toast.success("Task Added Successfully!");
        setRefreshKey((oldKey) => oldKey + 1);
      } catch (error) {
        console.error("Error adding task:", error);
        toast.error("Failed to add task!");
      } finally {
        setInputs({ title: "", description: "", time: "" });
      }
    } else {
      toast.error("Task Added But Not Saved! Please SignUp ");
      toast.success("Task Added Successfully!");
      setArray([...array, inputs]);
      setInputs({ title: "", description: "", time: "" });
    }
  };

  const deleteId = async (cardId) => {
    if (id) {
      try {
        await axios.delete(
          `${window.location.origin}/api/v2/deleteTask/${cardId}`,
          {
            data: { id: id },
          }
        );
        toast.success("Task Deleted Successfully!");
        setRefreshKey((oldKey) => oldKey + 1);
      } catch (error) {
        toast.error("Error deleting task!");
      }
    } else {
      toast.error("Please Login First!");
    }
  };

  const updateId = (taskId) => {
    if (id) {
      const taskToUpdate = array.find((task) => task._id === taskId);
      setUpdateDisplay(true);
      setUpdateTaskId(taskId);
      setToUpdateArray(taskToUpdate);
    } else {
      toast.error("Please Login First!");
    }
  };

  const handleUpdateComplete = () => {
    setUpdateDisplay(false);
    setUpdateTaskId(null);
    setToUpdateArray(null);
    setRefreshKey((oldKey) => oldKey + 1);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      if (id) {
        try {
          const response = await axios.get(
            `${window.location.origin}/api/v2/getTasks/${id}`
          );
          setArray(response.data.list || []);
        } catch (error) {
          console.error("Error fetching tasks:", error);
          setArray([]);
        }
      }
    };
    fetchTasks();
  }, [refreshKey]);

  return (
    <>
      <div className="flex relative items-center mt-[100px] gap-4 sm:flex-col sm:mt-[0px] sm:text-wrap sm:h-[100%] w-full justify-center px-[50px] pt-[25px] pb-[25px] bg-[#151515] text-[#EEEEEE]">
        <Toaster position="top-center" reverseOrder={true} />

        <div className="flex flex-col items-center justify-center gap-4 mt-7 p-8 sm:w-[350px] max-w-[100%] w-[500px] h-[500px] bg-[#151515] border border-gray-200 text-[#EEEEEE] rounded-xl shadow-sm">
          <h1 className="block text-2xl font-bold pb-2 text-[#C73659]">
            Enter Task Details
          </h1>
          <div className="max-w-sm space-y-3 w-full text-[#EEEEEE]">
            <label htmlFor="title" className="block text-sm mb-2">
              Title of Task
            </label>
            <input
              type="text"
              className="py-3 px-4 block w-full text-[#EEEEEE] bg-[#151515] border border-gray-600 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Enter Your Title"
              name="title"
              id="title"
              value={inputs.title}
              onChange={change}
              required
            />
          </div>
          <div className="max-w-sm space-y-3 w-full">
            <label htmlFor="description" className="block text-sm mb-2">
              Task Description
            </label>
            <textarea
              className="py-3 px-4 block w-full text-[#EEEEEE] bg-[#151515] border border-gray-600 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none resize-none"
              rows="7"
              placeholder="Write Description"
              name="description"
              id="description"
              value={inputs.description}
              onChange={change}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#C73659] text-[#EEEEEE] hover:text-[#EEEEEE] focus:outline-none hover:bg-[#A91D3A] disabled:opacity-50 disabled:pointer-events-none"
            onClick={submit}
            disabled={
              !inputs.title || !inputs.description || inputs.title.length > 35
            }
          >
            Add Todo
          </button>
        </div>

        <div className="flex w-[100%] h-full min-h-[500px] max-h-[500px]    sm:justify-evenly sm:p-4 sm:gap-x-0 justify-start gap-y-4 gap-x-7 mt-7 p-6 flex-wrap border bg-[#151515] px-10 overflow-auto rounded-[7px]">
          {array.length === 0 ? (
            <h1 className="text-2xl font-bold pb-2 text-[#C73659]">
              No Task Found
            </h1>
          ) : (
            array.map((item, index) => (
              <div key={item._id || index}>
                <MainContent
                  time={item.time}
                  title={item.title}
                  description={item.description}
                  id={item._id}
                  deleteid={deleteId}
                  updateid={() => updateId(item._id)}
                />
              </div>
            ))
          )}
        </div>
      </div>
      {updateDisplay && (
        <div className="absolute updatediv  top-0 left-0 flex justify-center items-center w-full max-w-[calc(100vw)] h-[100dvh] bg-[#151515a9]">
          <Updatetodo
            update={toUpdateArray}
            onUpdateComplete={handleUpdateComplete}
          />
        </div>
      )}
    </>
  );
}

export default Todo;
