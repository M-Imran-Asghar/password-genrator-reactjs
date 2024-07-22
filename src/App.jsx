import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const passwordGenrator = useCallback(()=>{
    let pass = ""
    let str = "ASDFGHJKLPOIUYTREWQZXCVBNMasdfghjklpoiuytrewqzxcvbnm"
    if(numberAllowed) str += "1234567890"
    if(charAllowed) str += "~`!@#$%^&*()/.<>,"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },
[numberAllowed,length,charAllowed, setPassword])

useEffect(()=>{
  passwordGenrator()
},
[numberAllowed,length,charAllowed,passwordGenrator])
  

  return (
    <div className='bg-slate-500 w-full h-screen '>
      <div className="bg-gray-600 text-white text-lg  w-auto justify-center outline-none shadow-lg">
      <h1 className='  p-4 mb-3  '>Password Genrator</h1>
     <div className='flex flex-wrap justify-center gap-0 mb-2'>
     <input 
      className='px-4 py-2 border rounded-lg shadow-sm'
      type="text"
      readOnly
      value={password}
      placeholder='Password'  />
      <button className="bg-blue-700  rounded-md outline-none text-lg px-3 py-0.5 shrink-0 cursor-pointer">Copy</button>
     </div>
     <div className="flex flex-wrap gap-1 justify-center">
      <input 
      type="range"
      min={6} max={20} 
      value={length} 
      onChange={(e)=>{setLength(e.target.value)}}
      className='cursor-pointer '/>
      <label>Length:{length}</label>
      <input type="checkbox"
      defaultChecked={numberAllowed}
      onChange={()=>{setNumberAllowed((prev)=>(!prev))}} />
      <label >Numbers</label>
      <input type="checkbox"
      defaultChecked={charAllowed}
      onChange={()=>{setCharAllowed((prev)=>(!prev))}} />
      <label>Charecters</label>
     </div> 
      </div>
    </div>
  )
}

export default App
