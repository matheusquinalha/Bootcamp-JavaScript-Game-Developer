//Código do desafio:  
  function validadorDeSenha(senha) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?!.*[_])\w{6,32}$/.test(senha)
  }
  
  let i = 0; //para uso local
  let senha = "";
  do {
    senha = gets(); //para uso na DIO
    if (senha !== "") {
      let valido = validadorDeSenha(senha);
      console.log("Senha " + (valido ? "valida." : "invalida."));
    }
  } while (senha !== "");