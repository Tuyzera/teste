var arr = [];


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
    const usuario = document.getElementById('usuario')
    const nome = document.getElementById('nome').value;
    usuario.innerHTML = nome;
 }

