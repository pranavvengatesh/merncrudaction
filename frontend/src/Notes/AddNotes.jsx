import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const AddNotes = () => {
    const [title,settitle]=useState("");
    const [content,setcontent]=useState("");

    const addnotes=async()=>{
await axios.post('http://localhost:5000/api/notes/addnote',{
            title,
            content
    })
        settitle("");
        setcontent("");

    }
  return (
    <div>
        <input type='text'
        id='title'
        value={title}
        onChange={(e)=>settitle(e.target.value)}

        placeholder='enter the title'/>
    <br/>
         <input type='text'
         placeholder='enetr the content'
         id='content'
         value={content}
         onChange={(e)=>setcontent(e.target.value)}
         />
        <br/>
        <button onClick={addnotes}>Add notes</button>
    </div>
    
  )
}

export default AddNotes