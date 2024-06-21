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
            user: 'jfaandon@gmail.com',
            password: 'jfa1234567'
        },
    });

    return transportador;
}

async function enviarEmail(nome) {
    const transportador = await criarTransportador();

    const opcoesEmail = {
        from: 'jfaandon@gmail.com',
        to: 'avila.marcsvg@gmail.com',
        subject: 'Print Andon',
        html: `<p>Print do dia Andon ${new Date().toLocaleDateString()}</p>`,
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
