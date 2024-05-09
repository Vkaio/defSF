const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Dados = require('./models/dados');
const app = express();
const port = 5000
const http = require('http').Server(app);

app.use(bodyParser.json());

const bdURL = "mongodb+srv://victorkaiorp:Z4jc9uBRtkskS9Ff@spacefarm-dbt.lajqays.mongodb.net/?retryWrites=true&w=majority&appName=SpaceFarm-dbT"


mongoose.connect(bdURL, {useNewUrlParser: true, useUnifiedTopology:true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, `Erro ao se conectar :`));

db.once('open', ()=>{
    console.log("conectado ao mongodb");
});

app.get('/dados', async (req, res)=>{
    try{
        const dados = await Dados.find({});
        res.json(dados);

    } catch (error){
        console.error(`Error ao obter dados do MongoDB`, error);
        res.status(500).send(`Erro ao obter dados`);
    }
})


app.post('/dados', (req,res)=>{
    const dados = req.body;

    console.log(dados);

    db.collection('test').insertOne(dados)

    res.send('dados recebidos');

});


app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
});