import "./todo.css";

function Todo({ tasks, setInProgress }) {
    return (
        <div className="todo-section">
            <h3>TODO</h3>
            {tasks.map((task, index) => (
                <div className="task-section" key={index}>
                    <p>{task}</p>
                    <p>Status: ToDo</p>
                    <button onClick={() => setInProgress(prev => [...prev, task])}>Move to InProgress</button>
                </div>
            ))}
        </div>
    );
}

export default Todo;