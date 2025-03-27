import express from 'express';
import prisma from './prisma';

const app = express();
app.use(express.json());

const puerto = 1208;

app.get("/saludo", (req,res)=>{
    console.log ('confirmar');
    res.send("munero");
})

app.get("/usuarios", async(req,res)=>{
    const usuarios = await prisma.cliente.findMany();
    res.send (usuarios);
})

app.post("/clientes", async (req,res)=>{
    const data = req.body;
    
    const cliente = await prisma.cliente.create({
        data: {
            nombre: data.nombre,
            edad: data.edad,
            celular: data.celular,
        }
    });
    res.send(cliente);
})

app.put("/clientes/:id", async (req,res)=>{
    const id = parseInt(req.params.id);
    const data = req.body;
    
    const cliente = await prisma.cliente.update({
        where: {id: id},
        data: {
            nombre: data.nombre,
            edad: data.edad,
            celular: data.celular,
        }
    });
    res.send(cliente);
})

app.delete("/clientes/:id", async (req,res)=>{
    const id = parseInt(req.params.id);
    const cliente = await prisma.cliente.delete({
        where: {id: id}
    });
    res.send(cliente);
})
app.listen(puerto, ()=>{
    console.log ('holii');
})
