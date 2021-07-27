import express from "express";

const server = express();

server.get('/primeira-rota', (request, response) => {
    return response.json({"mensagem": "Primeira rota no backend"});
})

server.listen(3333, () => {
    console.log("Servidor on 3333")
})

//METODOS HTTP
//GET >> LER INFORMACOES
//POST >> CADASTRAR INFORMACOES
//PUT ou PATCH >> ATUALIZAR INFORMACOES
//DELETE >> APAGAR INFORMACOES
