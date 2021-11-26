import { useState } from 'react'
import Task from './Task'

const Tasks = ({tasks}) => {
    return tasks.length === 0 ? (
        <>
            
        </>
    ) :
     (
        <>
            {tasks.map((task, index) => (
                <Task key={index} task={task} />
            ))}
        </>)
}

export default Tasks
