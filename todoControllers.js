const todos = require('./data');

// export my routes 
module.exports = {
home: (req, res) => {
    res.send("welcome to my todo list");
},

//define to a method to list all todos
myGetTodo: (req, res) => {
    // res.send();
    res.json({
        success: "ok",
        message: "display all my todos",
        results: todos
    }); 
},

// post a todo
myPostTodo: (req, res) => {
    todos.push(req.body);
    res.status(201).json({
        success:true,
        message: "added a new todo",
        results: req.body
    });
    // console.log(todos)
},


//update a todo
myUpdateTodo: (req, res) => {
    const id  = parseInt(req.params.id);
    const { title, priority, dueDate } = req.body;
    const todoIndex = todos.find((todo) => todo.id === id);

    if (todoIndex !== -1) {
        todos[todoIndex] = { ...todos[todoIndex], title, priority, dueDate };
        res.status(200).json({
            success: true,
            message: 'Updated the todo successfully',
            results: todos[todoIndex]
        });
    } else {
        res.status(404)({
            success: false,
            message: 'Update failed'
        })
    }
},


// delete a todo from todo list
myDeleteTodo: (req, res) => {
    const deleteIndex = todos.findIndex((todo) => todo.id === Id);

        if (deleteIndex !== -1) {
            const deletedTodo = todos.splice(deleteIndex, 1);
            res.status(200).json({
                success: true,
                message: `The object at index ${deleteIndex} is deleted`,
                results: deletedTodo
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Deletion Failed: Todo not found"
            });
        }
},

// fetch a single todo
mysingleTodo: (req, res) => {
const id = parseInt(req.params.id);
        const singleTodo = todos.find((todo)=>todo.id === id);

        if (singleTodo) {
            res.status(200).json({
                success: true,
                message: "Single Todo",
                results: singleTodo
            });
        }else {
            res.status(404).json({
                success: false,
                message: "Does not exist"
            })
        }
    }

};


