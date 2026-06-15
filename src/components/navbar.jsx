import { useState } from "react";
import "./navbar.css";

function Navbar({ tasks, setTasks }) {
    const [showCard, setShowCard] = useState(false);
    const [newTask, setNewTask] = useState("");

    const handleAddTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);   // add new task to array
            setNewTask("");                  // clear input
            setShowCard(false);              // close card
        }
    };

    return (
        <>
            <nav className="navbar">
                <h2>TaskFlow</h2>
                <button onClick={() => setShowCard(true)}>+ New Task</button>
            </nav>

            {showCard && (
                <div className="task-card">
                    <h3>Add New Task</h3>

                    <input
                        type="text"
                        placeholder="Enter task"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />

                    <button className="add-btn" onClick={handleAddTask}>Add</button>
                    <button className="close-btn" onClick={() => setShowCard(false)}>Close</button>
                </div>
            )}
        </>
    );
}

export default Navbar;
