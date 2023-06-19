const express = require('express');
require('./config')
const Products = require('./product') 
const app = express();

app.use(express.json())

app.post('/create',async (req, res)=>{
    console.log(req.body)
    let data = new Products(req.body)
    let result = await  data.save();
    console.log(data);
    res.send("Done")
})

app.get('/list',async (req, res)=>{
    console.log(req.body)
    let data =  await Products.find();
    console.log(data);
    res.send(data)
})
app.delete('/delete/:_id',async (req, res)=>{
    console.log(req.params.id)
    let data =  await Products.deleteOne({id:req.params.id});
    console.log(data);
    res.send("Done")
})

app.put('/update/:_id',async (req, res)=>{
    console.log(req.params)
    let data =  await Products.updateOne(req.params,{$set:{brand:"Apple"}});
    console.log(data);
    res.send("Done")
})

app.listen(5000)