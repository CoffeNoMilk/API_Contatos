import { createInputFiles } from "typescript";

function Confirmar_Request(req: any, inputs: string[]){
    if (inputs.length == 0){
        return false;
    }

    for (let i = 0; i < inputs.length; i++){
        
        if (req.body[inputs[i]] == undefined || req.body[inputs[i]] == ""){
            return false;
        }
   }

   return true;
}

function Confirmar_Objeto_Request(req: any, inputs: any[]){
    let mensagem = [];

    for (let i = 0; i < inputs.length; i++){
        if (req.body[inputs[i].name] == undefined || req.body[inputs[i].name] == ""){
            mensagem.push(inputs[i].mensagem);
        }
    }

    return mensagem.length == 0 ? true : mensagem;
}

export { Confirmar_Request, Confirmar_Objeto_Request };