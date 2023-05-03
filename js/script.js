const usuarios = JSON.parse(localStorage.getItem("json")) || [];

console.log(usuarios)


usuarios.forEach((elemento) =>{
    console.log(elemento)
})

function layoutCustom(){
    document.getElementById('div1').style.backgroundColor = 'red';
    document.getElementById('body1').style.backgroundColor = 'green';
    document.getElementById('div1').style.fontFamily = 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

function layoutNormal(){
    document.getElementById('div1').style.background = 'white';
    document.getElementById('body1').style.backgroundColor = 'white';
    document.getElementById('div1').style.fontFamily = 'Verdana', 'Geneva', Tahoma, sans-serif;
}

    function addItem(){
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
     

     }

     function criaElemento(json){
        const usuario = document.getElementById('usuario')
       usuario.innerHTML = json.nome;

        
    }


