const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const PORT = 3999;

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(routes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
