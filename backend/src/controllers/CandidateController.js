const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) {

        const {nome, identidade, cpf, dataNascimento, estadoCivil, cargo, profissao, sexo, possuiVeiculo, 
            habilitacao, pcd, telefoneFixo, celular, email, cep, rua, numero, complemento, bairro, cidade, uf, curriculo
      } = req.body;

        const newCandidate = new Candidate();

        newCandidate.nome = nome;
        newCandidate.identidade = identidade;
        newCandidate.cpf = cpf;
        newCandidate.dataNascimento = dataNascimento;
        newCandidate.estadoCivil = estadoCivil; 
        newCandidate.cargo = cargo;
        newCandidate.profissao = profissao;
        newCandidate.sexo = sexo;
        newCandidate.possuiVeiculo = possuiVeiculo; 
        newCandidate.habilitacao = habilitacao;
        newCandidate.pcd = pcd;
        newCandidate.telefoneFixo = telefoneFixo;
        newCandidate.celular = celular;
        newCandidate.email = email;
        newCandidate.cep = cep;
        newCandidate.rua = rua;
        newCandidate.numero = numero;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.uf = uf;
        newCandidate.curriculo = curriculo;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Ocorreu um erro');
            }

            return res.status(200).send(savedCandidate);
        });
    },



};