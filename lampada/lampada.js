const turnon = document.getElementById('turnon');
const turnoff = document.getElementById('turnoff');
const lamp = document.getElementById('lamp');

//Verifica se esta quebrada
function lampbroken (){
    return lamp.src.indexOf ('quebrada') > -1;
}
// Função Ligar lampada
function lampon () {
    if (!lampbroken ()){
    lamp.src = 'ligada.jpg';
    }
}
//Evento trocar imagem para lampada ligada
turnon.addEventListener('click', lampon);

//Função desligar lampada
function lampoff () {
    if (!lampbroken ()){
    lamp.src = 'desligada.jpg';
    }
}
//Evento trocar imagem para lampada desligada
turnoff.addEventListener('click', lampoff)

//Função trocar imagem para lampada quebrada
function lampqb () {
    lamp.src = 'quebrada.jpg';
}

lamp.addEventListener('mouseover', lampon)

lamp.addEventListener('mouseout', lampoff)

lamp.addEventListener('dblclick', lampqb)