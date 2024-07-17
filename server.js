const express = require('express');
require('./config/db')();   
// const Products = require('./product') 
const app = express();
const port = 5000;

app.use(express.json())

app.use("/user",require("./routes/userRoute"))


// app.get('/search/:key',async (req, res)=>{
//     console.log(req.params.key);
//     let data = await Products.find(
//         {
//             "$or":[
//                 {"name":{$regex:req.params.key}},
//                 {"brand":{$regex:req.params.key}}
//             ]
//         }
//         );
    
//     res.send(data)
// })


app.listen(port,()=>{
    console.log(`Server is runing on port: ${port}`);
})