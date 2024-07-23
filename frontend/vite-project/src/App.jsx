import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreatTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
function App() {
  const [todos, settodos] = useState([])
  console.log(import.meta.env.VITE_API_URL,"apiUrl")

  const apiUrl =import.meta.env.VITE_API_URL;

  console.log(apiUrl,"apiUrl")
  
  useEffect(()=>
  {

  setInterval(()=>{
  fetch(`${apiUrl}/todos`).then
  (async function(res)
  {
    const json = await res.json();
    settodos(json.todos);
  })
},5000)
  },[])

  

  return (
    <>
      <CreatTodo></CreatTodo>
      <Todos todos={todos} ></Todos>
    </>
  )
}

export default App
