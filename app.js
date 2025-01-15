const expres = require('express');
const app = expres();
const db = require('./db/connection');

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`O Express esta rodando na porta ${PORT}`);
});

// db connection
db 
    .authenticate()
    .then(() => {
        console.log("conectou ao banco com sucesso");
    })
    .catch(err => {
        console.log('ocoreu um erro', err);
    });

// routes
app.get('/', (req, res) => {
    res.send("Está funcionando 3")
})