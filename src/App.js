import { useEffect, useState } from 'react';
import './App.css';
import AllTasks from './components/AllTasks';
import NewTask from './components/NewTask';

function App() {
  const [tasks, setTasks] = useState([])
  const [count, setCount] = useState(0);
  const addTask = (e) => {
    console.log(tasks);
    const parent = e.target.parentElement;
    const count = tasks.length;
    if (!/\S/.test(parent.children[0].value)) return;
    const temp = [...tasks];
    temp.push({
      "id": count,
      "task": (parent.children[0].value).trim()
    })
    setCount(count + 1);
    setTasks(temp);
    console.log(tasks);
    parent.children[0].value = "";
  }
  const editTask = (e) => {
    const editBtn = e.target;
    const val = editBtn.getAttribute("val");
    const inputEle = editBtn.parentElement.children[0];
    if (editBtn.innerText == "Edit"){
    inputEle.disabled = false;
    inputEle.focus()
    editBtn.innerText = "Save";
    } else {
      if (!/\S/.test(inputEle.value)) return;
      const temp = [...tasks];
      for (const t of temp) {
        if (t.id == val){
          t.task = inputEle.value;
        }
      }
      setTasks(temp); 
      inputEle.disabled = true;
      editBtn.innerText = "Edit";
    }
  }
  const removeFilter = function(value){
    return value.id != this
  }
  const deleteTask = (e) => {
    const deleteBtn = e.target;
    const val = deleteBtn.getAttribute("val");
    let temp = [...tasks];
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id == val){
        temp[i].task = null;
        break;
      }
    }
    setTasks(temp);
  }
  const onKeyDownAdd = (e) => {
    console.log(e.keyCode);
    if (e.keyCode == 13){
      const addBtn = document.getElementById("add-new-task");
      addBtn.click();
    }
  }
  const onKeyDownEdit = (e) => {
    console.log(e.keyCode);
    if (e.keyCode == 13){
      const ele = e.target.parentElement;
      ele.children[1].click();
    }
  }
  useEffect(() => {
    console.log(tasks);
  })
  return (
    <div className="App">
      <header className="App-header">
        <p>
          To Do App
        </p>
        <NewTask addTask={addTask} onKeyDownAdd={onKeyDownAdd} />
        <AllTasks tasks={tasks} deleteTask={deleteTask} onKeyDownEdit={onKeyDownEdit} editTask={editTask} />
      </header>
    </div>
  );
}

export default App;
