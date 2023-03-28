import { json, Router } from 'express';
import { Confirmar_Objeto_Request } from './helpers/validate';
import { Carregar_Contatos, Salvar_Contato } from './helpers/load-data'; 

const router = Router();

let id = 0;

router.get('/', function (req, res) {
    res.send({
        api_name: 'api-contatos',
        descricao: 'API para gestão de contatos',
        status: 'OK',
    });
});

router.get('/sobre', function (req, res) {
    res.send({
        name: 'Moacir Roger',
        email: '2022102060030@aluno.ifro.edu.br',
        github: 'github.com/CoffeNoMilk'
    });
});

router.post('/contato', function (req, res) {
    let ok = true;
    let mensagem = "Contato salvo com sucesso!";

    const inputs = [
        {
            name: "nome",
            message: "A propriedade [nome] não deve estar em indefinida/vazio!"
        },
        {
            name: "email",
            message: "A propriedade [email] não deve estar em indefinida/vazio!"
        }
    ];

    const checkValidate = (inputs);

    if (Array.isArray(checkValidate)) {
        ok = false;

        mensagem = checkValidate.join(', ');
    }

    if (ok) {
        Salvar_Contato(req.body);
    }


    res.send({
        success: ok,
        message: mensagem
    })
});

router.get('/contato', function (req, res) {
    const contatos = Carregar_Contatos();

    res.send(contatos);
});

export default router;