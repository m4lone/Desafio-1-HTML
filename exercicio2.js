function useForm(){

  const objeto = {
    email: document.getElementById("email").value,
    senha: document.getElementById("senha").value,
    nomec: document.getElementById("nomec").value,
    idade: document.getElementById("idade").value,
    telefone: document.getElementById("telefone").value,
  }
  console.log(objeto)
}