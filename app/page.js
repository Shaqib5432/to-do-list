"use client"
import { setRequestMeta } from 'next/dist/server/request-meta'
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e)=>{
e.preventDefault()
setmainTask([...mainTask,{title,desc}])
settitle("")
setdesc("")
  };
const deleteHandler = (i)=>{
  let copyTask = [...mainTask]
  copyTask.splice(i,1)
  setmainTask(copyTask)

}

  let renderTask = <h2>No task Availabe</h2>
  if(mainTask.length>0){
renderTask = mainTask.map((t,i)=>{
  return(
  <li className='flex justify-between items-center'> 
    <div className='flex  justify-between mb-5 w-2/3'>
    <h5 className='text-2xl font-bold'>{t.title}</h5>
    <h6 className='text-xl font-bold'>{t.desc}</h6>
  </div>
  <button onClick={()=>{
    deleteHandler(i)

  }} className='bg-red-400 text-white text-2xl font-bold m-4 px-4 py-2 rounded'>Delete</button>
  </li>
  );
})
  }
  return (
   <>
   <h1 className='bg-black text-white m- text-5xl font-bold text-center  align-middle p-8'>My todo li
   t</h1>
   <form onSubmit={submitHandler}>
    <input type="text" className="text-2xl border-black m-5 px-4 py-3 border-4"
    placeholder='Enter task here'
    value={title}
    onChange={(e)=>{
settitle(e.target.value)
    }}
    />
     <input type="text" className="text-2xl border-black m-5 px-4 py-3 border-4"
    placeholder='Entre Description here'
    value={desc}
    onChange={(e)=>{
setdesc(e.target.value)
    }}
    />
    <button className='bg-black text-white text-2xl px-4 py-2 font-bold rounded'>Add task</button>

     
   </form>
   <hr/>
   <div className='bg-slate-200 p-8' >
    <ul>
      {renderTask}
    </ul>
   </div>
   </>
  )
}

export default page