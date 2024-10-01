import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [query,setQuery]=useState('')
  const [amount,setAmount]=useState('')
  const users = [{
    product:'Laptop',
    price:'$1200'
  },{
       product:'Phone',
    price:'$800'
  }]
   const handleInput = (event)=>{
    const input = event.target.value.toLowerCase();
    setQuery(input)

    const user = users.find((user)=>user.product.toLowerCase()===input)
    user?setAmount(user.price):setAmount("");

   }
  
  return (
    <>
   <input type="text" value={query}  onChange={handleInput} placeholder='enter your product name here' />
  <div>
    {amount&&<p>Price :{amount}</p>}
  </div>
    </>
  )
}

export default App
