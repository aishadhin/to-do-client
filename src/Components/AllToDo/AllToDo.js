import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import SingleToDo from "../SingleToDo/SingleToDo";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AllToDo = () => {
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
  const handleSubmit = (event) => {
      event.preventDefault();
      const toDoName = event.target.todoname.value;
      const Date = event.target.date.value;
      const toDo = { toDoName, Date };

      fetch("http://localhost:5000/add-new-task", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(toDo),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          refetch();
          event.target.reset();
        });
  };

  return (
    <div className="md:py-12 p-4 text-center bg-red-200">
      <div className="md:flex justify-evenly items-center">
        <div className="bg-white rounded shadow-lg">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
        <form
        onKeyDown={(e) => {
            if (e.key === 'Enter') {
                console.log(e.target.todoname.value)
            }
        }}
          className="flex md:flex-row flex-col my-2"
          onSubmit={handleSubmit}
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 m-6">
        {tasks?.map((singleToDo) => (
          <SingleToDo key={singleToDo._id} single={singleToDo}></SingleToDo>
        ))}
      </div>
    </div>
  );
};

export default AllToDo;
