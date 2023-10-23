const express = require('express');
const routes = express.Router();

const arrayBooks = require('../data/books');

routes.get("/livros", (req, res) => {
    try {
        res.status(200).json(arrayBooks);
    } catch (error) {
        console.error("Erro durante a busca de lista de livros:", error);
        res.status(500).json({ error: error.message });
    };
});

routes.get("/livros/buscar/:isbn", (req, res) => {
    try {
        const isbn = req.params.isbn;
        if (isbn) {
            let livroEncontrado = arrayBooks.find(livro => livro.isbn === isbn);
            if (livroEncontrado) {
                res.json(livroEncontrado);
            } else {
                res.status(404).send("Livro não encontrado");
            }
        } else {
            res.status(400).send("ISBN não fornecido");
        };
    } catch (error) {
        console.error("Erro durante a busca do livro especifico:", error);
        res.status(500).json({ error: error.message });
    };
});

routes.delete("/livros/excluir/:isbn", (req, res) => {
    try {
        const isbn = req.params.isbn;
        const index = arrayBooks.findIndex(livro => livro.isbn === isbn);
        if (index !== -1) {
            const livroRemovido = arrayBooks.splice(index, 1)[0];
            console.log("Livro excluído com sucesso:", livroRemovido);
            res.status(200).json({ message: "Livro excluído com sucesso", livro: livroRemovido });
        } else {
            res.status(404).send("Livro não encontrado");
        };
    } catch (error) {
        console.error("Erro durante a exclusão do livro:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    };
});

routes.post("/livros/cadastrar", (req, res) => {
    try{
        const livro = req.body;
        const livroAdcionado = arrayBooks.push(livro);
        console.log("Cadastrado com sucesso");
        res.status(201).json({ message: "Livro cadastrado com sucesso", livro: livro });
    } catch (error) {
        console.error("Erro durante o cadastro do livro:", error);
        res.status(500).json({ error: error.message });
    };
});

routes.put("/livros/atualizar/:isbn", (req, res) => {
    try {
        const isbn = req.params.isbn;
        const { newTitulo, newAutor } = req.body;
        let livroAtualizado = false;
        for (const livro of arrayBooks) {
            if (livro.isbn === isbn) {
                // Atualizar o livro no array
                livro.titulo = newTitulo;
                livro.autor = newAutor;

                livroAtualizado = true;
                break;
            };
        };

        if (livroAtualizado) {
            res.status(200).send("Livro atualizado com sucesso");
        } else {
            res.status(404).send("Livro não encontrado");
        };
    } catch (error) {
        console.error("Erro durante a atualização do livro:", error);
        res.status(500).json({ error: error.message });
    };
});

module.exports = routes;
