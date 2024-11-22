import todosModel from "../models/todos.model.js"

const addTodo = (req,res) => {
    const {title} = req.body;
    if (!title) {
        res.status(400).json({
            status: false,
            message : "Todo not recieved"
        })
        return
    }
    const todo = todosModel.create({
        title,
        id: Date.now(),
    })
    res.status(201).json({
        status: true,
        message : "Todo added to database successfully"
    })
}

export {addTodo}