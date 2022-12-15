const express=require("express")

const app=express();
const port=3000;
const suma= 15+5;

app.get("/",(req,res)=>{
    res.send(`El resultado de 15+5 es:${suma}`);
})


app.listen(port,()=>{
    console.log("el servidor esta escuchando en http://localhost:${port}")
    console.log(`El resultado de 15+5 es: ${suma}`)
})