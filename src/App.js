import React, { useState } from 'react';
import './index.css';
function App() {
  const [taskName, setTaskName] =  useState("")
  const [taskDetail, setTaskDetail] = useState("")
  const [taskList, setTaskList] = useState([])
  function addTask(){
    
    //taskList.push({name: taskName, detail: taskDetail})
    setTaskList(prev => {
      return [
        ...prev,
        {
          name: taskName, detail: taskDetail
        }
      ]
    })
    setTaskList(taskList)
    
    setTaskName("")
    setTaskDetail("")
  }


function newBox(){
  setTaskList(prev => {
    return [
      ...prev,
      {
        name: "", detail: ""

      }
    ]
  })

}

  return (

    
    <div className="container" >

      <nav className="navbar">
        
          <h3 className='app-title'>TASK TRACKER</h3>
        
        
         <img src="../icons8-add-new-48.png" alt="" onClick={newBox} />
        
        

      </nav>

{
  taskList.map((val, index) => {
return(


      <div className='tasks' key = {index}>
        <div className='ind-tasks'>
        <input placeholder='write your task'
        onChange={ev => setTaskName(ev.target.value)} type="text" className='task1'/>
        <div className='checkbox'>

        <input type="checkbox" name="checkbox" id="" />
        <label htmlFor="checkbox">completed</label>
        </div>
        
        <textarea placeholder='write your task detail'
        onChange={ev => setTaskDetail(ev.target.value)} name="" id="" cols="30" rows="10"></textarea>
        
        <div className='buttons'>

       <button>delete </button>
       <button onClick={addTask}>save</button>
        </div>
        </div>

      </div>
)
})
}
    <div>
    
    </div>
      
       
    </div>
    
    
  );
}


export default App;
