import {addTodo, getTodo, deleteTodo,updateTodo} from "../Controller/todoController.js";
import express from 'express'
const route=express.Router()
route.post('/addtodo',addTodo);
route.get('/gettodo',getTodo);
route.delete('/deletetodo/:id', deleteTodo);
route.put('/updatetodo/:id', updateTodo);   
export default route
