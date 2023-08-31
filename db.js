const mongoose=require('mongoose');

const mongoURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.zjrpq1l.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}`;


const connectToMongo = ()=>{
    mongoose.connect(mongoURI,{useNewUrlParser: true}).then((res)=>{
        console.log("Connected to database");
    }).catch((err)=>{
        console.log(mongoURI);
        console.log(err);
    });
    
}

module.exports = connectToMongo;