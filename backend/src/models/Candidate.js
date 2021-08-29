const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: {type: String, unique: false, required: true},
    identidade: {type: Number, unique: false, required: false},
    cpf: {type: Number, unique: true, required: true},
    dataNascimento: {type: Date, unique: false, required: true},
    estadoCivil: {type: String, unique: false, required: false},
    cargo: {type: String, unique: false, required: false},
    profissao: {type: String, unique: false, required: true},
    genero: {type: String, unique: false, required: false},
    possuiVeiculo: {type: String, unique: false, required: false},
    habilitacao: {type: String, unique: false, required: false},
    pcd: {type: String, unique: false, required: false},
    telefoneFixo: {type: Number, unique: false, required: false},
    celular: {type: Number, unique: false, required: true},
    email: {type: String, unique: true, required: true},
    cep: {type: Number, unique: false, required: true},
    endereco: {type: String, unique: false, required: true},
    numero: {type: Number, unique: false, required: true},
    complemento: {type: String, unique: false, required: false},
    bairro: {type: String, unique: false, required: true},
    cidade: {type: String, unique: false, required: true},
    uf: {type: String, unique: false, required: true},
    curriculo: {type: String, unique: false, required: false}
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);