const express = require('express')
const app = express()
const { MongoClient } = require('mongodb')

const mongodb = new MongoClient('mongodb://localhost:27017')

app.use(express.static('dist'))
app.use(express.json())

app.get('/items', async (req, res) => {
    await mongodb.connect()
    const collection = mongodb.db('general_menus').collection('menus')
    const items = await collection.find({}).toArray()
    res.send(items)
    await mongodb.close()
})

app.post('/orders/:id', async (req, res) => {
    await mongodb.connect()
    const collection = mongodb.db('general_menus').collection('orders')
    await collection.insertOne({userid: req.params.id, order: req.body})
    res.send({status:"ok"})
    await mongodb.close()    
})

app.get('/orders/:id', async (req, res) => {
    await mongodb.connect()
    const collection = mongodb.db('general_menus').collection('orders')
    const orders = await collection.find({}, {where: {userid: {$eq: req.params.id}}}).toArray()
    console.log(orders)
    res.send(orders)
    await mongodb.close()    
})

app.listen(3000, async () => {
    await mongodb.connect()
    const collection = mongodb.db('general_menus').collection('menus')
    const items = await collection.find({}).toArray()
    if (!items.length) {
        const toInsert = [
            {
                color: 'hotpink',
                price: 12
            },
            {
                color: 'lime',
                price: 13
            },
            {
                color: 'orange',
                price: 16
            },
            {
                color: 'blue',
                price: 12
            },
            {
                color: 'yellow',
                price: 18
            },
            {
                color: 'coral',
                price: 23
            }
        ]

        await collection.insertMany(toInsert)
    }
    await mongodb.close()    
    console.info('Your server is running...')
})
