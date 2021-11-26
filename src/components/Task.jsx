const Task = ({task}) => {
    return (
        <div className="task">
            <h3>{task.text}</h3>
            <p>Date</p>
        </div>
    )
}

export default Task
