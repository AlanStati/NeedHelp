document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('formulario');
    const cepInput = document.getElementById('cep');
    const estadoInput = document.getElementById('estado');
    const cidadeInput = document.getElementById('cidade');
    const enderecoInput = document.getElementById('endereco');

    cepInput.addEventListener('blur', function() {
        const cep = cepInput.value.replace(/\D/g, ''); 

        if (cep.length !== 8) {
            alert('CEP inválido. Informe um CEP válido com 8 dígitos.');
            return;
        }

        
        const url = `https://viacep.com.br/ws/${cep}/json/`;

       
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.erro) {
                    alert('CEP não encontrado. Verifique o CEP informado.');
                } else {
                    estadoInput.value = data.uf;
                    cidadeInput.value = data.localidade;
                    enderecoInput.value = data.logradouro;
                }
            })
            .catch(error => {
                console.error('Erro ao consultar o CEP:', error);
                alert('Erro ao buscar informações do CEP. Tente novamente mais tarde.');
            });
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
    
    });
});
