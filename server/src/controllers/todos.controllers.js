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

// Function to get all todos
const getTodos = async (req, res) => {
    try {
        const todos = await todosModel.find();
        res.status(200).json({
            status: true,
            data: todos,
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Failed to fetch todos",
            error: error.message,
        });
    }
};

export { addTodo, getTodos };