const mongoose=require('mongoose');

const mongoURI = "mongodb+srv://yadavaditya183:MVxcqgK38sIAVXNX@cluster0.zjrpq1l.mongodb.net/inotebook";


const connectToMongo = ()=>{
    mongoose.connect(mongoURI,{useNewUrlParser: true}).then((res)=>{
        console.log("Connected to database");
    }).catch((err)=>{
        console.log(mongoURI);
        console.log(err);
    });
    
}

module.exports = connectToMongo;
