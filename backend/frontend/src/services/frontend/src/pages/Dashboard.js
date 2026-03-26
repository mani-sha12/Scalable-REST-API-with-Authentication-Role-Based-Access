import React, { useEffect, useState } from 'react';
import { getTasks, createTask, deleteTask } from '../services/api';

function Dashboard() {
  const [tasks,setTasks] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if(token){
      getTasks(token).then(res => setTasks(res.data));
    }
  }, [token]);

  const handleDelete = id => {
    deleteTask(id, token).then(() => setTasks(tasks.filter(t=>t._id!==id)));
  }

  return (
    <div>
      <h2>Dashboard</h2>
      {tasks.map(task=>(
        <div key={task._id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={()=>handleDelete(task._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
