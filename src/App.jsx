import React, { useEffect } from 'react'
import Home from "./pages/Home/Home.jsx"
import Landing from "./pages/landing/Landing.jsx"
import Search from "./pages/search/Search.jsx"
import Stream from "./pages/stream/Stream.jsx"

import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import Player from './pages/Player/Player.jsx'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase.js'
import toast, { Toaster } from 'react-hot-toast'

const App = () => {

  const navigate = useNavigate()

   /* useEffect(()=>{
      onAuthStateChanged(auth, async(user)=>{
        if(user){
          console.log("logged in");
          toast.success("Logged in successfully")
          navigate("/")
        } else {
          console.log("logged out");
          toast.success("Logged out successfully")
            navigate("/login")
        }
      })
    }, [])*/

  return (
    <div>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/player/:id' element={<Player/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/stream/:id' element={<Stream/>} />
      </Routes>
    </div>
  )
}

export default App
