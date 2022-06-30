import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllToDo from "./Components/AllToDo/AllToDo";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Calendar from "./Components/Calendar/Calendar";

function App() {
  return (
    <div className="bg-slate-100 container mx-auto">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/to-do" element={<AllToDo></AllToDo>}></Route>
        <Route path="/calendar" element={<Calendar></Calendar>}></Route>
      </Routes>
    </div>
  );
}

export default App;
