import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const VideoCall = () => {
    const [roomId,setRoomId]=useState()
    const navegate = useNavigate()

    const handlInput =()=>{
        navegate(`room/${roomId}`)

    }
  return (
    <>
    <input type="text" placeholder='enter your room id'value={roomId}  onChange={(e)=>setRoomId(e.target.value)} />
    <button onClick={handlInput}>Join Now</button>
      
    </>
  )
}

export default VideoCall
