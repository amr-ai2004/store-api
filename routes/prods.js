import express from 'express';

const prodRoutes = express.Router();

let products=[
    {id:1, prod:"Jacket", price:30},
    {id:2, prod:"Chair", type:40}
]

// http://localhost:3001/api/products/
prodRoutes.get('/',(req,res)=>{
    res.json(products);
});

// http://localhost:3001/api/products/1
prodRoutes.get('/:id',(req,res)=>{
    let newProd=products.find(item=>item.id===Number(req.params.id));
    if(newProd)
        res.json(newProd);
    else
        res.json({"Error":"Product not found."});
});

// http://localhost:3001/api/products/  (POST)
prodRoutes.post('/',(req,res)=>{
    let product={
        id: Date.now(),
        prod: req.body.prod,
        price: req.body.price
    };
    products.push(product);
    res.json(products);
});

// http://localhost:3001/api/products/1  (PUT)
prodRoutes.put('/:id',(req,res)=>{
    let theProd=products.find(item=>item.id===Number(req.params.id));
    if(theProd){
        ({prod:theProd.prod, price: theProd.price}=req.body);
        res.json(products);
    }
    else
        res.json({"Error":"Product not found."});
});

// http://localhost:3001/api/products/1  (DELETE)
prodRoutes.delete('/:id',(req,res)=>{
    let prodIndex=products.findIndex(item=>item.id===Number(req.params.id));
    console.log(prodIndex);
    if(prodIndex+1){
        console.log(prodIndex);
        res.json(products.splice(prodIndex,1));
    }
    else
        res.json({"Error":"Product not found."});
});

prodRoutes.use((req,res)=>{
    res.json({"Error":"'PRODUCTS' not found!!"});
});

export default prodRoutes;