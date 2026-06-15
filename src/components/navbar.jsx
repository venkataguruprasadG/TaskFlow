import { useState } from "react";
import "./navbar.css"

function Navbar() {
    const [showCard, setShowCard] = useState(false);

    const [task, setTask] = useState("");
    return (
        <>
            <nav className="navbar">
                <h2>TaskFlow</h2>
                <button onClick={() => setShowCard(true)}> + New Task</button>
            </nav>

            {
                showCard && (
                    <div className="task-card">
                        <h3>Add New Task</h3>

                        <input type="text"
                            placeholder="Enter task"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                        />

                        <button className="add-btn" onClick={() => setShowCard(false)}>Add</button>

                        <button className="close-btn" onClick={() => setShowCard(false)}>Close</button>
                    </div>
                )
            }
        </>
    );
}

export default Navbar;