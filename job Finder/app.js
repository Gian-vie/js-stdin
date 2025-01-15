const expres = require("express");
const app = expres();

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`O Express esta rodando na porta ${PORT}`)
})

app.get('/', (req, resp) => {
    resp.send("Está funcionando 2")
})