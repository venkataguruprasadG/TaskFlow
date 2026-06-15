import { useState } from "react";
import Navbar from "./components/navbar";
import Todo from "./components/todo";
import InProgress from "./components/InProgress";
import "./App.css";
function App() {
  const [task, setTask] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);

  return (
    <div className="header">
      <Navbar tasks={task} setTasks={setTask} />
      <Todo tasks={task} setInProgress={setInProgress} />
      <InProgress inprogress={inProgress} />
    </div>
  );
}

export default App;