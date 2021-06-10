import React, { useState } from 'react'

const AddTask = ({onAdd}) => {

    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)

    const onSubmit = (e) => {

        e.preventDefault()

        if(!text)
        {
            alert('please add a task')
            return
        }

        if(!day)
        {
            alert('Please add a day and time')
            return
        }

        onAdd( {text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div>
            <div className='add-control'>
                <label className = 'form-control label'>Task</label>
                <br></br>
                <input type='text' placeholder='Add Task' className='form-control input'
                value = {text}
                onChange = {(e) => setText(e.target.value)}
                />
            </div>
            <div className='add-control'>
                <label className = 'form-control label'>Add Date and Time</label>
                <br></br>
                <input type='text' placeholder='Add Date and time' className='form-control input' 
                value = {day}
                onChange = {(e) => setDay(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label className = 'form-control label'>Reminder</label>
                <input type='checkbox' 
                value = {reminder}
                checked = {reminder}
                onChange = {(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            </div>
            <input type='submit' className='btn btn-block' value='Save task' />
        </form>
    )
}

export default AddTask
