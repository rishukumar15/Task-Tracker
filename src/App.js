import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from 'react';
import AddTask from './components/AddTask';
import Axios from 'axios';

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setTasks(response.data);
    });
  });

  const deleteTask = (id) => {
    Axios.delete(`http://localhost:3001/api/delete/${id}`);
  }

  const addTask = ({ text, day, reminder }) => {
    //const id = Math.floor(Math.random() * 10000) + 1
    //const newTask = {id, ...task}
    console.log(text);
    Axios.post("http://localhost:3001/api/insert", {
      text: text,
      day: day,
      reminder: reminder,
    }).then(() => {
      alert("Succesful insert into database");
    });
    //setTasks([...tasks, newTask])
  }

  const toggleReminder = (id, rem) => {
    const reminder = (rem === 'Y' ? 'N' : 'Y')
    setTasks(tasks.map((task) => task.id === id ? { ...task, Reminder: reminder } : task))
  }

  const updateTask = (id, newTask) => {
    Axios.put("http://localhost:3001/api/update", {
      id : id,
      text : newTask,
    });
  }

  return (

    <div className='container'>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {
        showAddTask && <AddTask onAdd={addTask}  />
      }
      {
        tasks.length > 0 ?
          (<Tasks tasks={tasks} onDelete = {deleteTask} onUpdate={updateTask} />) :
          <h3>No Tasks to do, Keep going!</h3>
      }
    </div>
  );
}

export default App;
