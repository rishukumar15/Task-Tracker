import Task from './Task';

const Tasks = ({tasks, onDelete, onUpdate, onToggle }) => {

    return (
        <>
            {tasks.map( (task) => (
                <Task task={task} onDelete={onDelete} onUpdate={onUpdate} onToggle={onToggle} />
            ) )
            }
        </>
    )
}

export default Tasks