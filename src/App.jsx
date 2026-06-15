import { useState } from "react";
import Navbar from "./components/navbar";
import Todo from "./components/todo";
import "./App.css";
function App() {
  const [task, setTask] = useState("");

  return (
    <div className="header">
      <Navbar task={task} setTask={setTask} />
      <Todo task={task} />
    </div>
  );
}

export default App;