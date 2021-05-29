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

app.get("/",(req,res)=>{
    res.send("Rodando "+object[array[0]][1].address);
})



app.listen(port,object[array[0]][1].address,()=>console.log(`Server rodando no IP ${object[array[0]][1].address} porta:${port}`))