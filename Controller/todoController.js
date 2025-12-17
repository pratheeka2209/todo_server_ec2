import todoCollection from "../Model/todoModel.js";
export const addTodo= async (req,res) =>{
    try{
    console.log('Request body:', req.body);
    const data= new todoCollection(req.body);
    console.log('Data to save:', data);
    await data.save()
    console.log('Data saved successfully');
    res.status(201).json({mess:"data has been stored"})
}catch(err){
    console.error('Error in addTodo:', err);
    res.status(500).json({message:err.message})
}
}

export const getTodo = async (req,res) => {
    try{
        const todos = await todoCollection.find()
        res.status(200).json(todos)
    }catch(err){
        res.status(500).json({message:err})
    }
}

export const deleteTodo = async (req,res) => {
    try{
        await todoCollection.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"Todo deleted successfully"})
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

export const updateTodo = async (req, res) => {
    try{
        await todoCollection.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json({message:"Todo updated successfully"})
    }catch(err){
        res.status(500).json({message:err.message})
    }
}