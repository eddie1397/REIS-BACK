const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI
const mongoose = require('mongoose');
const cors = require('cors');


const whitelist = ['http://localhost:3000', 'https://reis-frontend.herokuapp.com']

const corsOptions = {
  origin: (origin,callback)=>{
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null,true)
    } else {
      callback(new Error('Not allowed by CORS!'))
    }
  },
  credentials:true
}

app.use(cors(corsOptions))


//SetUp for mongoose
const db = mongoose.connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser:true,
  useUnifiedTopology: true
}, ()=> {
  console.log('Database Connected');
})

db.on('error', (error)=> { console.log('Error', error) })
db.on('Connected', (error)=> { console.log('Mongo Connected') })
db.on('Disconnected', (error)=> { console.log('Mongo Disconnected') })

app.use(express.json());
app.use('/travels', require('./controllers/travelController'));


app.get('/', (req,res)=>{
  res.send('Helle')
})


app.listen(PORT, ()=>{
  console.log('Partying on PORT: ' + PORT + ' 🎉🎉🎉🎉!');
})
