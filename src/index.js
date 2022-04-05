/* Chamadas HTTP
GET - Busca informações dentro do servidor
POST - Insere informações dentro do servidor
PUT - Altera informações dentro do servidor
PATCH - Altera informações específicas dentro do servidor
DELETE - Deleta informações dentro do servidor
*/

const express = require('express');
const app = express();

app.get("/courses", (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
})

app.put("/courses/:id", (request, response) => {
    return response.json(["Curso 5", "Curso 2", "Curso 3", "Curso 4"]);
})

app.patch("/courses/:id", (request, response) => {
    return response.json(["Curso 5", "Curso 6", "Curso 3", "Curso 4"]);
})

app.delete("/courses/:id", (request, response) => {
    return response.json(["Curso 5", "Curso 2", "Curso 4"]);
})

app.listen(3333);