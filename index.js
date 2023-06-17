const mongoose = require('mongoose');

const main  = async ()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/e-comm")
    const ProductSchema = new mongoose.Schema({
        name: String,
        price: Number
    });
    const ProductsModel = mongoose.model('products',ProductSchema);
    let data = new ProductsModel({name:"m16"});
    let  result = await data.save();
    console.log(result);
}
main();