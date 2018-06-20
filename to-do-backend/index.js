const express = require('express'),
      app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Allows CORS
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE");
    next();
});

// Require and configure knex
const knex = require('knex')({
    client: 'postgres',
    connection: {
      host     : '127.0.0.1',
      user     : 'postgres',
      password : 'Se5MkcUX',
      database : 'fullstack_todo',
      charset  : 'utf8'
    }
});
// Connect bookshelf with knex
const bookshelf = require('bookshelf')(knex);

// Create Model - used like a constructor
const Todo = bookshelf.Model.extend({
    tableName: 'todos'
});

// To add a new todo to the database
app.post('/todos', (req, res)=>{
    let newTodo = new Todo(req.body);
    newTodo.save()
           .then(savedTodo => {
               res.json(savedTodo.attributes);
           })
           .catch(err => {
               console.log(err);
           });
});

// To get all todos in the database
app.get('/todos', (req, res)=>{
    Todo.where({})
        .fetchAll()
        .then(results => {
            res.json(results);
        })
        .catch(err => {
            console.log(err);
        });
});

// Toggles the completed status
app.put('/todos', (req, res)=>{
    let idToUpdate = req.body.id;
    let changeComplete = req.body.complete;
    let sendContent = req.body.content;
    let sendCategory = req.body.category;
    new Todo({id:idToUpdate})
            .save({complete:changeComplete, content:sendContent, category:sendCategory})
            .then(result => {
                res.json(result.attributes);
            })
            .catch(err => {
                console.log(err);
            });
});

// Deletes items when clear complete is clicked
app.delete('/todos', (req, res)=>{
    Todo.where({complete:true})
            .destroy()
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                console.log(err);
            });
});

app.listen(8080, ()=>{console.log('Server running on 8080');});