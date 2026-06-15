import "./InProgress.css";

function InProgress({ inprogress }) {
    return (
        <div className="Inprogress-section">
            <div className="InProgress-card">
                {inprogress.map((task, index) => (
                    <div className="task-section" key={index}>
                        <p>{task}</p>
                        <p>Status: In Progress</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InProgress;