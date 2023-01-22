const barraLaranja1 = document.getElementById('barra-laranja1');
const barraBranca1 = document.getElementById('barra-branca1');

const barraLaranja2 = document.getElementById('barra-laranja2');
const barraBranca2 = document.getElementById('barra-branca2');

const barraLaranja3 = document.getElementById('barra-laranja3');
const barraBranca3 = document.getElementById('barra-branca3');

function colocaCor1() {
    barraBranca1.style.display = 'none';
    barraLaranja1.style.display = 'block';
}
function tiraCor1() {
    barraBranca1.style.display = 'block';
    barraLaranja1.style.display = 'none';
}

function colocaCor2() {
    barraBranca2.style.display = 'none';
    barraLaranja2.style.display = 'block';
}
function tiraCor2() {
    barraBranca2.style.display = 'block';
    barraLaranja2.style.display = 'none';
}

function colocaCor3() {
    barraBranca3.style.display = 'none';
    barraLaranja3.style.display = 'block';
}
function tiraCor3() {
    barraBranca3.style.display = 'block';
    barraLaranja3.style.display = 'none';
}

const carregando1 = document.getElementById('carregando1');
const spinner1 = document.getElementById('spinner1');

const carregando2 = document.getElementById('carregando2');
const spinner2 = document.getElementById('spinner2');

const carregando3 = document.getElementById('carregando3');
const spinner3 = document.getElementById('spinner3');

function carregar1() {
    carregando1.style.display = 'none';
    spinner1.style.display = 'block';
}
function pararCarregar1() {
    carregando1.style.display = 'block';
    spinner1.style.display = 'none';
}

function carregar2() {
    carregando2.style.display = 'none';
    spinner2.style.display = 'block';
}
function pararCarregar2() {
    carregando2.style.display = 'block';
    spinner2.style.display = 'none';
}

function carregar3() {
    carregando3.style.display = 'none';
    spinner3.style.display = 'block';
}
function pararCarregar3() {
    carregando3.style.display = 'block';
    spinner3.style.display = 'none';
}