

function layoutCustom(){
    document.getElementById('div1').style.backgroundColor = 'red';
    document.getElementById('div1').style.fontFamily = 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

function layoutNormal(){
    document.getElementById('div1').style.background = 'rgb(241,246,251)';
    document.getElementById('div1').style.fontFamily = 'Verdana', 'Geneva', Tahoma, sans-serif;
}

    function addItem(){
        const login = document.getElementsByClassName('login')
        const novoItem = document.createElement('p')
        /* Cria um objeto JavaScript contendo os dados que deseja armazenar. */
        const json = {
           nome: document.getElementById('nome').value,
           senha: document.getElementById('senha').value 
        }

        criaElemento(json);
     
        /* Converta o objeto em uma string JSON usando a função JSON.stringify(). */
        const userJson = JSON.stringify(json);
     
        /* Use a função localStorage.setItem() para armazenar a string JSON em uma chave específica do LocalStorage. */
        localStorage.setItem('json', userJson);

        alert('Logado com Sucesso!')

        window.location.href = 'index.html';
     
     }

     function criaElemento(json){
        const usuario = document.getElementById('usuario')
        usuario.innerHTML = json.nome;

        
    }


