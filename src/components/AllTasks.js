import React, { useEffect } from 'react';
import './style.css';
import Task from './Task';
const AllTasks = ({tasks, editTask, deleteTask, onKeyDownEdit}) => {

  useEffect(() => {
    console.log(tasks);
  }, [tasks])

  return ( 
    <div className="all-tasks">
      {tasks.map((value, index) => (
      <Task tasks={tasks} editTask={editTask} deleteTask={deleteTask} onKeyDownEdit={onKeyDownEdit} value={value} index={index} />
      ))}
    </div>
   );
}
 
export default AllTasks;