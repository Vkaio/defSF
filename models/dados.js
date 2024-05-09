const mongoose = require('mongoose');

const dadosSchema = new mongoose.Schema({
    ID: String,
    Hora: Number,
    Lat: Number,
    Long: Number,
    T1: Number,
    U1: Number,
    T2: Number,
    U2: Number,
    Cond: Number,
    PH: Number,
    N: Number,
    P: Number,
    K: Number,
    VoltBat: Number,
    LifeBat: Number,
    CONT: Number

});

const Dados = mongoose.model('Dados', dadosSchema);

module.exports = Dados;