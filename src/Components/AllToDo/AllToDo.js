import React from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import SingleToDo from "../SingleToDo/SingleToDo";

const AllToDo = () => {
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
    const toDo = { toDoName };

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
    <div className="py-12 text-center bg-slate-200">
      <div>
        <form className="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task Name"
            class="input w-full max-w-xs"
            name="todoname"
          />
          <input type="submit" placeholder="Task Name" class="btn" />
        </form>
      </div>
      <div className="flex justify-between gap-16 m-12">
        {tasks?.map((singleToDo) => (
          <SingleToDo key={singleToDo._id} single={singleToDo}></SingleToDo>
        ))}
      </div>
    </div>
  );
};

export default AllToDo;
