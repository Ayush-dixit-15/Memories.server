import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js'
import dotenv from 'dotenv';


dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
app.use('/posts', postRoutes);
app.get('/',(req,res)=>{
  res.send('Hello and welcome to memories');
})
app.use('/user',userRoutes);
const connect1 = process.env.CONNECT; 
const PORT = process.env.PORT || 5000; 

mongoose.connect(connect1, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Connected to mongo and Server running on port ${PORT}`)))
  .catch((error) => console.log(error.message));
