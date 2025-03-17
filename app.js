let amigos = [];

function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim();

    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        nomeInput.value = ''; 
        atualizarListaAmigos();
    } else {
        alert("Nome inválido ou já adicionado!");
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário no mínimo 2 amigos para realizar o sorteio!");
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    mostrarResultadoSorteio(sorteado);
}

function mostrarResultadoSorteio(sorteado) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; 
    resultadoDiv.classList.add('result-list-visible');

    const p = document.createElement('p');
    p.textContent = `A pessoa sorteada é: ${sorteado}`;
    resultadoDiv.appendChild(p);
}
