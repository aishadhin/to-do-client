import React from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";

const Completed = () => {
  const { data: tasks, isLoading } = useQuery("CompletedTasks", () =>
    fetch("http://localhost:5000/completed-tasks?task=completed").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 m-6">
      {tasks?.map((task) => (
        <div className="" key={task._id}>
          <h2 className="text-lg">{task.toDoName}</h2>
          <p className="text-lg">Date: {task.Date}</p>
        </div>
      ))}
    </div>
  );
};

export default Completed;
