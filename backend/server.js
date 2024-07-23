const express = require("express");
const { createTodo } = require("./types");
const {todo} = require("./db");
//const port = 3000;

const cors = require("cors");
require('dotenv').config();
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  })
app.post("/todo",async function(req,res){

    console.log( req.body," req.body");
    const creatpayload = req.body;
    const parsepayload = createTodo.safeParse(creatpayload);
    if(!parsepayload.success)
    {
        res.status(411).json({
            msg:"You sent the wrong Input",
        })
        return;
    }

    await todo.create({
        title:creatpayload.title,
        description:creatpayload.description
    }) 
    console.log( res," req.body");

})

app.get("/todos",async function(req,res){
    
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed",async function(req,res){
    
  const updatetodo = req.body;
  const parsepayload = updatetodo.safeParse(updatetodo);
  if(!parsepayload.success)
  {
    res.status(411).json({
        msg:"You sent the wrong Input",
    })
    return;
  }
  await todo.update({
    _id:req.body.id
  },
  {
    completed:true
  })
  res.json({
    msg:"Todo marked as completed"
  })

})