import "./todo.css"

function Todo({ task }) {
    return (
        <div className="todo-section">
            <h3>TODO</h3>
            <div className="task-section">
                <p>{task}</p>
                <p>Status: Todo</p>
            </div>
        </div>
    );
}

export default Todo;