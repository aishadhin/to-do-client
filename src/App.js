import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllToDo from "./Components/AllToDo/AllToDo";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="bg-slate-400 container mx-auto">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/to-do" element={<AllToDo></AllToDo>}></Route>
      </Routes>
    </div>
  );
}

export default App;
