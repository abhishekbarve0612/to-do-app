import React, { useEffect } from 'react';

const Task = ({editTask, value, onKeyDownEdit, deleteTask, index, tasks}) => {

  useEffect(() => {
    console.log(tasks);
  }, [tasks])
  return ( 
    <>
    { value['task'] && <div className="task" key={index}>
      <input val={value.id} onKeyDown={(e) => {onKeyDownEdit(e)}} defaultValue={value.task} type="text" disabled/>
      <button val={value.id} onClick={(e) => editTask(e)} className="edit-task warning">Edit</button>
      <button val={value.id} onClick={(e) => {deleteTask(e)}} className="delete-task danger">Delete</button>
      </div>}
      </>
   );
}
 
export default Task;
<>
</>