import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';
const ViewNotes = () => {
    const [notes,setnotes]=useState([]);
    const load=async()=>{
  const res=await axios.get("http://52.66.166.31:5000/api/notes")

  setnotes(res.data);


};
useEffect(()=>{
    load();
},[])

  return (
    <div>
      <h1>Notes</h1>
       {notes.map((note)=>
     <div key={note._id}>
        <b>{note.title}</b> -{note.content}
        </div>
      )}

    </div>
  )
}

export default ViewNotes