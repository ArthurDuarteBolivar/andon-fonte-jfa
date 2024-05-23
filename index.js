const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 9002;

app.get('/', (req, res) => {
    const nome = req.query.nome
    enviarEmail(nome);
    res.send('E-mail enviado com sucesso!');
});

async function criarTransportador() {
    const transportador = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: 'jfaandon@gmail.com',
            clientId: '498418341515-7ds18ttg766dlv578mou1oh8fajr3n00.apps.googleusercontent.com',
            clientSecret: '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',
            refreshToken: '1//04L4vLlteU5sbCgYIARAAGAQSNwF-L9IrGQXkd1RN9xVLh36Xixnlt91tPu__GwEfYAmqkq5jr6vn5HRQEPsF03misPurTZGWlI8',
        },
    });

    return transportador;
}

async function enviarEmail(nome) {
    const transportador = await criarTransportador();

    const opcoesEmail = {
        from: 'jfaandon@gmail.com',
        to: 'avila.marcsvg@gmail.com, bolivarartur77@gmail.com',
        subject: 'Print Andon',
        text: 'Este é um e-mail de teste enviado pela API com um anexo.',
        attachments: [
            {
                filename: nome, // Nome do arquivo anexado
                path: 'C:/screenshot-andon/' + nome, // Caminho para o arquivo
                cid: 'imagemCID' // ID do conteúdo para referenciar no corpo do email
            }
        ]
    };

    transportador.sendMail(opcoesEmail, function (erro, info) {
        if (erro) {
            console.error('Erro ao enviar o e-mail:', erro);
        } else {
            console.log('E-mail enviado com sucesso:', info.response);
        }
    });
}

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
