import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import prodRoutes from './routes/prods.js';


const app = express();
dotenv.config();

const PORT= process.env.PORT || 3002;

//Middleware
app.use(cors());
app.use(express.json());

//Routes || Endpoints || Request URLs

// http://localhost:3001/api/products/
app.use('/api/products', prodRoutes);

// http://localhost:3001/
app.get('/', (req, res)=>{
    res.json({"message": "Home has been reached."});
})

app.get('/hello', (req, res)=>{
    res.json({"message": "Hello Hello Hello."});
})

app.use((req,res)=>{
    res.json({"Error":"Response not found!!"});
});

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
});