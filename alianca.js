alert ("Cadatro aliança");

let totalCadastro = 2;
let cadastroDoCliente = 0;

let cliente = []; 
let ourives = [];
let modelo = []; 
 



while (cadastroDoCliente <= totalCadastro) {
    let nome = (prompt('Digite o seu nome: '));
    cliente[cadastroDoCliente] = cliente;

    let email = (prompt('Digite o seu email: '));
   ourives[cadastroDoCliente] = ourives;

    let telefone = (prompt('Digite o seu telefone: '));
    modelo[cadastroDoCliente] = modelo;

   

    cadastroAtual++;
}

for (let contador = 0; contador <= cadastroAtual; contador++) {
    console.log ("=========================================");
    console.log (cliente[contador]);

    console.log (ourives[contador]);

    console.log (modelo[contador]);
    console.log ("=========================================");
}