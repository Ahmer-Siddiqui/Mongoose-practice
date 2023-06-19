const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/e-comm")

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand:String,
    category:String
});

const saveInDB  = async ()=>{
    const Product = mongoose.model('products',ProductSchema);
    let data = new Product({
        name:"m16",
        price: 250,
        brand:"max",
        category:"Mobile"
});
    let  result = await data.save();
    console.log(result);
}

const updateInDB = async  ()=>{
      const Product = mongoose.model('products', ProductSchema);
      let data = await Product.updateOne({name:"m8"},{$set:{price:500}});
      console.log(data);
    }
    
    const deleteInDB = async ()=>{
    const Product = mongoose.model('products',ProductSchema);
    let data = await Product.deleteOne({name:"m8"});
    console.log(data);

    }
    
    const findInDB = async ()=>{
    const Product = mongoose.model('products',ProductSchema);
    let data = await Product.find();
    console.log(data);

    }
    findInDB();