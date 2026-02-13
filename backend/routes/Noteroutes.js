const express=require('express')
const router=express.Router();
const Note=require('../model/Model');

router.post('/addnote',async(req,res)=>{
    const newnote=new Note(req.body);
    await newnote.save()
    res.json(newnote);
})
//read all the notes
router.get('/',async(req,res)=>{
    const notes=await Note.find();
    res.json(notes);
})

router.put('/:id',async(req,res)=>{
    const note=await Note.findByIdAndUpdate(req.params.id,req.body);
    res.json("upadted data succesfully")
})
router.delete('/:id',async(req,res)=>{
    await Note.findByIdAndDelete(req.params.id)
    res.json("Deleted the content")
})

module.exports=router;

