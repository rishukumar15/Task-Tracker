import React, {useState} from 'react'
import { FaTimes } from 'react-icons/fa';
import { TiEdit } from 'react-icons/ti'


const Task = ({task, onDelete, onUpdate }) => {
    
    const [update, setUpdate] = useState(false);
    const [newTask , setNewTask] = useState("");  

    return (
        <div className={`task ${ task.Reminder === 'Y' ? 'reminder' : ''}`}>
            <h3>{task.Task} <FaTimes
                style = {{ cursor : 'pointer'}}
                onClick={() => onDelete(task.id)}
            />< TiEdit
                style = {{ cursor : 'pointer'}}
                onClick = {() => setUpdate(!update)}
            />
            {
                update && <form>
                    <input type="text" name="taskname" onChange = {(e) => {
                    setNewTask(e.target.value);
                    }}
                    /> <button onClick = {() => {
                    onUpdate(task.id , newTask);
                    setUpdate(!update);
                    }}>Update</button>
                </form> 
            }
            </h3>
            <h2>{task.Day}</h2>
        </div>
    )
}

export default Task

//className={`task ${ task.reminder === 'Y' ? 'reminder' : ''}`}  onDoubleClick={() => onToggle(task.id)}