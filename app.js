const Express = require("express");
const app = Express();
const os = require('os');
const port = 80
const object = os.networkInterfaces();
//Busca IP
let array=[];
for (const key in object) {
    array.push(key)
}
app.get("/teste",(req,res)=>{
    res.send("oi");
})

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
})



app.listen(port,object[array[0]][1].address,()=>console.log(`Server rodando no IP ${object[array[0]][1].address} porta:${port}`))