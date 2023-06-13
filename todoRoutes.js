const express = require('express');

const {myGetTodo, myPostTodo, myUpdateTodo, myDeleteTodo, home, mysingleTodo} = require('./todoControllers');

const router = express.Router();


//routes 
router.get('/',home);
router.get('/todos',myGetTodo);
router.post('/todos', myPostTodo);
router.delete('/todos/:id', myDeleteTodo);
router.put('/todos/:id', myUpdateTodo);
router.get('/todos/:id', mysingleTodo);


module.exports = {
    router
};




