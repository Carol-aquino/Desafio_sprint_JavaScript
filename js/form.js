
//class contato

class contato {
    
}

function Post(form) {

  let contato = {
            nome: form.elements.namedItem("nome").value,
           email: form.elements.namedItem("email").value, 
           telefone: form.elements.namedItem("telefone").value, 
            contato: form.elements.namedItem("contato").value
  };

            let lista = JSON.parse(localStorage.getItem("contatos")) || [];
            lista.push(contato);
            localStorage.setItem("contatos", JSON.stringify(lista));
            alert("Dados salvos com sucesso!");
            form.reset();
            return false;
  }


function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}