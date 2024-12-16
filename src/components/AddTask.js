import React from 'react'

const AddTask = ({taskList, setTaskList , task , setTask}) => {

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (task.id) {
      const date = new Date();
      const updateTask = taskList.map((tl) => (
        tl.id === task.id ?
          {
            id: task.id,
            name: task.name,
            time: `${date.toLocaleTimeString()}  ${date.toLocaleDateString()}`,
          } :  tl
      ))

      setTaskList(updateTask)
      setTask({})
    } else {
      const date = new Date();
      const newTask ={
        id : date.getTime(),
        name: e.target.task.value ,
        time:  `${date.toLocaleTimeString()}  ${date.toLocaleDateString()}` ,
      }
      setTaskList([...taskList, newTask])
      setTask({})
      e.target.task.value = "";
    }
  }

  return (
    <section className='addTask'>
      <form onSubmit={handleSubmit}>
        <input
         type="text" 
         name='task' 
         autoComplete='off' 
         value={task.name || ""} 
         onChange={(e)=> setTask({...task,name: e.target.value })} 
         placeholder='add task' 
         maxLength={25}/>

        <button type='submit'>{ task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  )
}

export default AddTask