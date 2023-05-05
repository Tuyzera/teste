
    function addFundo(option){
        if (option == 'custom') {
            document.querySelector('.cabecalho-conteudo').style.backgroundColor = 'red';
            document.querySelector('.footer').style.backgroundColor = 'red'
            document.querySelector('main').style.fontFamily = 'Arial'
            document.querySelector('.nav-bar-esquerda').style.backgroundColor = 'red'
            document.querySelector('.sectionItem-Painel').style.backgroundColor = 'red'
            document.querySelector('#div1').style.backgroundColor = 'red'
        } else {
            document.querySelector('.cabecalho-conteudo').style.backgroundColor = 'rgb(17, 80, 134)';
            document.querySelector('.footer').style.backgroundColor = 'rgb(17, 80, 134)'
            document.querySelector('main').style.fontFamily = 'Nunito'
            document.querySelector('.nav-bar-esquerda').style.backgroundColor = '#FFFFFF'
            document.querySelector('.sectionItem-Painel').style.backgroundColor = '#F1F6FB'
            document.querySelector('#div1').style.backgroundColor = '#F1F6FB'
        }
        
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

    function sair(){
        console.log('oi');
        localStorage.clear();
        window.location.href = 'index.html';
        document.getElementById('section-login').innerHTML = 'Login'
        document.getElementById('imagem').style.display = 'none'
        document.getElementById('imagemSair').style.display = 'none'

    }




