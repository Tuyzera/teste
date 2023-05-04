

const usuarios = document.getElementById('usuarios')
console.log(usuarios)

const json = JSON.parse(localStorage.getItem('json'));
console.log(json.nome)

if (json != null) {
    console.log(json.nome)
    alert("entrou")
} else {
    usuarios.innerHTML = 'Usuário não autenticado';
}
