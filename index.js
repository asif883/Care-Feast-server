const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 3000;


// middleware
app.use(cors())
app.use(express.json())


const uri= `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.osztyuf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  const dbConnect = async ()=>{
    try{
        await client.connect()
        console.log('DB connected');
    }
    catch(err){
       console.log(err.name , err.massage);
    }
  }

  dbConnect()
  
app.get('/', async (req ,res)=>{
    res.send('server is Running')
})

app.listen(port, ()=>{
    console.log(`Server is running on the: ${port} `);
})