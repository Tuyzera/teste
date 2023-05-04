
const usuarios = document.getElementById('usuario')
console.log(usuarios)

const json = JSON.parse(localStorage.getItem('json'));
console.log(json.nome)

if (json != null) {
    usuarios.innerHTML = json.nome;
} else {
    usuarios.innerHTML = 'Usuário não autenticado';
}
