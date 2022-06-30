import SingleToDo from "../SingleToDo/SingleToDo";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";

const Home = () => {
  const {
    data: tasks,
    isLoading,
  } = useQuery("taskForTodoPage", () =>
    fetch("http://localhost:5000/all-task").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="py-12 text-center bg-red-200">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 m-6">
        {tasks?.map((singleToDo) => (
          <SingleToDo key={singleToDo._id} single={singleToDo}></SingleToDo>
        ))}
      </div>
    </div>
  );
};

export default Home;
