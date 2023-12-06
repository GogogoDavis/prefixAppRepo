const express = require('express');
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV || 'development'])
const cors = require('cors');
const app = express();

const port = 8080; 

app.use(cors())
app.use(express.json())

app.listen(port, () => console.log(`Alrighty weather-boi, this john do be running on port ${port}`))

app.get('/', (req, res) => {
    knex('items_table')
    .select('*')
    .then(data => res.json(data))
});

app.get('/item/:id', (req, res) => {
    const itemId = req.params.id; 
    knex('items_table')
    .where('id', itemId)
    .select('*')
    .then(data => res.json(data))
})

//Tried using async in case request loops over itself. If this doesn't correct the issue try adding 'id', column to .insert
//And then delete it, not sure why it fixes the code but it do. 
app.post('/', async (req , res) => {
    const newItem = req.body; 
        try { 
    await knex('items_table').insert({
        
        userId: newItem.userId,
        ItemName: newItem.ItemName, 
        description: newItem.description, 
        quantity: newItem.quantity
    })
        res.json('cracked?')
    } catch (error) {
        console.error('Error creating item:', error)
    }
})

//seems to work thus far 
    app.patch('/edit/:id', (req, res) => {
    let itemId = req.params.id;
    let itemBody = req.body; 
    knex('items_table')
    .where('id', itemId)
    .update(
        {
            userId: itemBody.userId,
            ItemName: itemBody.ItemName, 
            description: itemBody.description, 
            quantity: itemBody.quantity
        }
    )
    .then((updateReturn) => res.json({message: 'hory sheet'}))
    })
//works in postman but not search bar
    app.delete('/delete/:id', async (req, res)=> {
    const itemDel = req.params.id
    knex('items_table')
   .where('id', itemDel)
    .del()
    .then(() => res.json({message: `it done did it`})) 
  })


  //Notes and stuff


  // app.post('/', (req, res) => { 
//     const newItem = req.body;
//     knex('items_table')
//     .select('id')
//     .then(idArray => {
//       const newItemData = {
//         id: idArray.length+1,
//         userId: newItem.userId,
//         ItemName: newItem.ItemName, 
//         description: newItem.description, 
//         quantity: newItem.quantity
        
//       };
//       knex('items_table')
//       .insert(newItemData) 
//       .then(() => res.json({message: 'it done be added'})) 
//     })
//   })

// app.use(cors())

// app.get('/', (req, res) => {
//     knex('users_table')
//     .select('*')
//     .then(data => res.json(data))
// })

// app.get('/items', (req, res) => {
//     knex('items_table')
//     .select('*')
//     .then(data => res.json(data));
// })

// app.post('/items', (req, res) => {
//     let itemToAdd = req.body; 
//     knex('items_table')
//     .select('id')
//     .insert({
//         'userId': itemToAdd.userId,
//         'ItemName': itemToAdd.ItemName,
//         'description': itemToAdd.description,
//         'quantity': itemToAdd.quantity
//     })
//     .into('items_table')
//     .then(() => res.json({message: 'item has been added'}))
// })

// app.delete('/items/:id', (req, res) => {
//     let itemDelete = req.params.id;

//     knex('items_table') 
//     .where('id', itemDelete)
//     .del()
//     .then(() => res.json({message: 'it done got gone'}))
// })
