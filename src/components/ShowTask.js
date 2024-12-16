import React from 'react'

const ShowTask = ({taskList, setTaskList , task , setTask}) => {

  const handleEdit = (id) =>{
    const selectedTask = taskList.find((todo)=> todo.id === id);
    setTask(selectedTask)
  }

  const handleDelete = (id) =>{
    const newTaskList = taskList.filter((t)=>  id !== t.id)
    setTaskList(newTaskList)
  }


  return (
    <section className='showTask'>
        <div className="head">
          <div>
            <span className='title'>Todo</span>
            <span className='count'>{taskList.length}</span>
          </div>
          <button className='clearAll' onClick={()=> setTaskList([])}>Clear All</button>
        </div>
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <p>
              <span className='name'>{task.name}</span>
              <span className='time'>{task.time}</span>
            </p>
            <i className="bi bi-pencil" onClick={()=> handleEdit(task.id)}></i>
            <i className="bi bi-trash3" onClick={()=> handleDelete(task.id)}></i>
          </li>
        ))}

        </ul>
    </section>
  )
}

export default ShowTask