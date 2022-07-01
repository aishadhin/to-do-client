import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { useQuery } from "react-query";
import { format } from "date-fns";
import Loading from "../Loading/Loading";

const SingleToDo = ({ single }) => {
  const [date, setDate] = useState(new Date());
  const {
    data: tasks,
    isLoading,
    refetch,
  } = useQuery("taskForTodoPage", () =>
    fetch("http://localhost:5000/all-task").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    const toDoName = event.target.todoname.value;
    const Date = event.target.date.value;
    const toDo = { toDoName, Date };
    fetch(`http://localhost:5000/update-task/${single._id}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toDo),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        refetch();
      });
  };

  const handleCheck = () => {
    fetch(`http://localhost:5000/task-complete/${single._id}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: "completed" }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        refetch();
      });
  };

  return (
    <div className="bg-white rounded shadow-lg p-4 flex justify-between">
      <input onClick={() => handleCheck()} type="checkbox" class="checkbox" />
      <h2 className="text-lg">{single.toDoName}</h2>
      <p className="text-lg">{single.Date}</p>

      <label
        for="my-modal-3"
        class="btn hover:bg-red-500 hover:text-white bg-red-100 text-red-500 border-none"
      >
        Edit
      </label>
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="">
            <div className="bg-white rounded shadow-lg">
              <DayPicker mode="single" selected={date} onSelect={setDate} />
            </div>
            <form
              onSubmit={handleUpdateSubmit}
              className="flex md:flex-row flex-col my-2"
            >
              <input
                type="text"
                placeholder="Task Name"
                class="input input-bordered"
                name="todoname"
              />
              <input
                type="text"
                name="date"
                value={format(date, "PP")}
                className="input input-bordered"
              />
              <input
                type="submit"
                placeholder="Task Name"
                class="btn hover:bg-red-100 bg-red-500 text-white hover:text-red-400 border-none"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToDo;
