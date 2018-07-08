// VERSÃO 0.0.1
// 1. Crie um formulário que permita inserir um texto e um botão para "twittar".
// 2. Adicione um evento de click ao botão ou de submit no formulário.
// 3. No evento, obter o texto.
// 4. Adicione o texto ao HTML.


var btnInputText = document.getElementById("input-text-btn");

function userPostText() {
    event.preventDefault();
    var userInputText = document.getElementById("input-text-area").value;
    var postTextOutput =  document.getElementById("output-text");
    var userText = document.createTextNode(userInputText);
    var newUserPost = document.createElement('p');
    newUserPost.appendChild(userText);
    postTextOutput.appendChild(newUserPost);
};

btnInputText.addEventListener('click', userPostText);
