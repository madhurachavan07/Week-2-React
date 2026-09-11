import { useState } from "react"

function Day7() {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState("")

  function addTask() {
    if (task.trim() !== "") {
      setTasks([...tasks, task])
      setTask("")
    }
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  return (
    <div>
      <h1>Task Tracker</h1>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>Add Task</button>

      {tasks.map((item, index) => (
        <div key={index}>
          <span>{item}</span>
          <button onClick={() => deleteTask(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default Day7