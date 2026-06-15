import "./todo.css"

function Todo({ tasks }) {
    return (
        <div className="todo-section">
            <h3>TODO</h3>
            {tasks.map((task, index) => (
                <div className="task-section" key={index}>
                    <p>{task}</p>
                    <p>Status: ToDo</p>
                </div>
            ))}
        </div>
    );
}

export default Todo;