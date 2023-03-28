import fs from 'fs';

const Arquivo = '${__dirname}/storage/contatos.json';
let contatos = Array();

function Carregar_Contatos(){
    if (!fs.existsSync(Arquivo)){
        fs.writeFileSync(Arquivo, JSON.stringify([]));
    }

    const data = fs.readFileSync(Arquivo);

    contatos = JSON.parse(data.toString());
}

function Salvar_Contato(data: any){
    contatos.push({
        id: contatos.length + 1,
        data
    });

    fs.writeFileSync(Arquivo, JSON.stringify(contatos));
}

export { Carregar_Contatos, Salvar_Contato }