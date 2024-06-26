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
            refreshToken: '4/0AdLIrYcsCrfhGGu0tAAXmRxFy3OsXb9yy3yMChobvisCN5qi9l0pXgrCQoX91bpG--nGWw',
        },
    });

    return transportador;
}

async function enviarEmail(nome) {
    const transportador = await criarTransportador();

    const opcoesEmail = {
        from: 'jfaandon@gmail.com',
        to: 'avila.marcsvg@gmail.com, ',
        subject: 'Print Andon',
        text: 'Print do dia Andon '+ new Date().toLocaleDateString(),
        attachments: [
            {
                filename: nome, // Nome do arquivo anexado
                path: 'C:/screenshot-andon/' + nome, // Caminho para o arquivo
                cid: 'imagemCID' // ID do conteúdo para referenciar no corpo do email
            }
        ]
    };
    //bolivarartur77@gmail.com, flaviobh.camelo@gmail.com, jfa.diogenes@gmail.com, processos5@jfaeletronicos.com, processos1@jfaeletronicos.com',
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
