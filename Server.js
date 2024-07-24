const express = require('express')
const app = express();
app.use(express.json());

app.get('/Student',(req,res)=>{
    res.json({
        "status":"success",
        "data":[
            {"id": 1,"name":"Khan","Div":"A","Dep":"MCA"},
            {"id": 2,"name":"Milan","Div":"A","Dep":"MCA"},
            {"id": 3,"name":"Vishal","Div":"A","Dep":"MCA"},
            {"id": 4,"name":"Khusal","Div":"A","Dep":"MCA"},
            {"id": 5,"name":"Jeet","Div":"A","Dep":"MCA"},

        ],
        "message":"Retrive Successfully"
    })
})

app.get('/Student/:id',(req,res)=>{
    const id =req.params.id;
    res.json({
        "status":"success",
        "data":{"id":id,"name":"Khan","Div":"A","Dep":"MCA"},
        "message":"Retrive Successfully"

    })
})

app.post('/Student',(req,res)=>{
    const id =req.params.id;
    res.json({
        "status":"success",
        "data":{"name":req.body.name,"Div":req.body.Div,"Dep":req.body.Dep},
        "message":"Inserted Successfully"
    })
})

app.put('/Student',(req,res)=>{
    const id =req.params.id;
    res.json({
        "status":"success",
        "data":{"id":req.body.id,"name":req.body.name,"Div":req.body.Div,"Dep":req.body.Dep},
        "message":"Update Successfully"
    })
})

app.post('/Student',(req,res)=>{
    const id =req.params.id;
    res.json({
        "status":"success",
        "data":{"id":req.body.id},
        "message":"Delete Successfully"
    })
})
app.listen(5000,()=> { console.log(`Running on port 5000`);})