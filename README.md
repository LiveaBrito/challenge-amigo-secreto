# Jogo do Amigo Secreto
Este projeto é um jogo simples de Amigo Secreto implementado em JavaScript. O usuário pode adicionar amigos à lista e, ao clicar no botão de sorteio, o sistema escolherá aleatoriamente um amigo secreto da lista. Abaixo, a explicação de cada parte do código que realiza essas funcionalidades.

## Estrutura do Código

O código é composto por três principais funcionalidades:

1. **Adicionar um amigo à lista**
2. **Exibir a lista de amigos**
3. **Sorteio de um amigo secreto**

## Explicação das Funções

### 1. Array para armazenar os amigos

```javascript
let amigos = [];
```
- Função: Este é um array vazio, onde os nomes dos amigos serão armazenados à medida que o usuário os adicionar. Ele serve para manter a lista de amigos do jogo.

### 2. Função para adicionar o nome de um amigo à lista

```javascript
function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim();

    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        nomeInput.value = ''; // Limpar o campo de input
        atualizarListaAmigos();
    } else {
        alert("Nome inválido ou já adicionado!");
    }
}
```
- Função: Esta função é chamada quando o usuário tenta adicionar um novo amigo à lista.
- nomeInput: Obtém o valor do campo de input onde o nome do amigo é inserido.
- nome: Remove espaços extras antes e depois do nome digitado.
- Verificação: Se o nome não está vazio e ainda não foi adicionado à lista, ele é adicionado ao array amigos. Se o nome for inválido ou já estiver na lista, exibe um alerta.
- Após adicionar o nome, o campo de input é limpo e a lista de amigos é atualizada.

### 3. Função para atualizar a lista de amigos na interface

```javascript
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpar a lista antes de atualizar

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}
```
- Função: Após cada adição de amigo, esta função atualiza a lista de amigos na interface do usuário.
- Limpeza: Primeiro, a lista de amigos na interface é limpa para garantir que não haja duplicação.
- Exibição: Para cada amigo no array amigos, um novo item de lista (<li>) é criado e adicionado à interface.

### 4. Função para realizar o sorteio de um amigo secreto

```javascript
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário no mínimo 2 amigos para realizar o sorteio!");
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarResultadoSorteio(sorteado);
}
```
- Função: Esta função é chamada para realizar o sorteio.
- Verificação: A função verifica se há pelo menos dois amigos na lista, pois o sorteio não pode ser feito com menos de duas pessoas. Se não houver, exibe uma mensagem de alerta.
- Sorteio: Se a verificação passar, um amigo é sorteado aleatoriamente a partir do array amigos usando Math.random().
- Exibição do resultado: Após o sorteio, a função mostrarResultadoSorteio() é chamada para exibir o nome do amigo sorteado.

### 5. Função para mostrar o resultado do sorteio na interface

```javascript
function mostrarResultadoSorteio(sorteado) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; // Limpar resultados anteriores
    resultadoDiv.classList.add('result-list-visible'); // Torna visível o resultado

    const p = document.createElement('p');
    p.textContent = `A pessoa sorteada é: ${sorteado}`;
    resultadoDiv.appendChild(p);
}
```
- Função: Esta função é responsável por mostrar o resultado do sorteio.
- Limpeza: Primeiro, qualquer resultado anterior é removido da tela.
- Exibição: O nome da pessoa sorteada é exibido dentro de um parágrafo (< p >),
que é então adicionado à área de resultados da interface (div com id resultado).
- Visibilidade: A classe result-list-visible é adicionada à div para garantir que o resultado do sorteio se torne visível na interface.

## Fluxo do Jogo

1. **Adicionando Amigos:** O usuário digita o nome de um amigo no campo de entrada e clica no botão para adicionar. O nome será armazenado no array amigos e exibido na lista na interface.
2. **Sorteio:** Quando o usuário clicar no botão para realizar o sorteio, o sistema selecionará aleatoriamente um amigo da lista e exibirá o resultado na tela.
3. **Resultado:** O nome da pessoa sorteada será mostrado, e o usuário pode tentar novamente caso queira fazer outro sorteio.

### Exemplo de como usar o jogo

1. Abra a página do jogo.
2. Digite o nome de seus amigos e adicione-os à lista.
3. Clique em "Sortear amigo" para escolher aleatoriamente um amigo secreto.
4. O resultado será exibido acima do botão.



***Link de acesso ao jogo:*** 

https://challenge-amigo-secreto-dusky-seven.vercel.app/


***Entre na diversão e descubra quem é o seu amigo secreto!***











