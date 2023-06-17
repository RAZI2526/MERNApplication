var express=require('express');
var cors=require('cors');
var mongoClient=require('mongodb').MongoClient;

let app=express();
app.use(cors());
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json());

app.get("/",function(request,response){
    response.send("I love Sehli Praween.")
})
app.get("/dataFromDataBase",function(request,response){
    mongoClient.connect("mongodb://127.0.0.1:27017")
    .then((obj)=>{
        var database=obj.db("dataBaseName12")
        database.collection("collectionName12").find().toArray().then((document)=>{
            response.send(document)
        })
    })
})
app.post("/postingMernData",function(request,response){
    var mernData={
        userName:request.body.userName,
        password:request.body.password
    }
    mongoClient.connect("mongodb://127.0.0.1:27017")
    .then((obj)=>{
        var database=obj.db("dataBaseName12")
        database.collection("collectionName12").insertOne(mernData).then(()=>{
            console.log("Mern Data Inserted.")
        })
    })
})

app.get("*",function(request,response){
    response.send("Path requested not available.")
})
app.listen(5566)
console.log("Server http://127.0.0.1:5566 -- Started")