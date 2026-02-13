const mongoose=require('mongoose');
const express=require('express')
const cors=require('cors');

const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mynotes')
.then(()=>{
    console.log("connected to mongodb");
})
.catch((err)=>{
    console.log(err);

})
const routes=require('./routes/Noteroutes');
app.use('/api/notes',routes);





app.listen(5000,()=>{
    console.log('server is running on port on 5000');

})