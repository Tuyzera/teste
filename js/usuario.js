const usuarios = document.getElementById('usuario')

const json = JSON.parse(localStorage.getItem('json'));

if (json != null) {
    document.getElementById('imagemPreta').style.display = 'none'
    document.getElementById('section-login').innerHTML = 'Sair'
    usuarios.innerHTML = json.nome;

} else {
    document.getElementById('imagem').style.display = 'none'
    document.getElementById('imagemSair').style.display = 'none'
    usuarios.innerHTML = 'Usuário não autenticado';
}
