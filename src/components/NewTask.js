import React from 'react';
import './style.css';
const NewTask = ({addTask, onKeyDownAdd}) => {
  return ( 
    <div className="input-new-task">
      <input type="text" onKeyDown={(e) => {onKeyDownAdd(e)}} name="new-task" id="new-task"/>
      <input id="add-new-task" type="submit" onClick={(e) => {addTask(e)}} value="Add Task"/>
    </div>
   );
}
 
export default NewTask;