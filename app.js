// VERSÃO 0.0.2
// Não inserir texto vazio (desativar o botão "twittar").
// Conte o número de caracteres de forma regressiva.

var btnInputText = document.getElementById('input-text-btn');
var userInputText = document.getElementById('input-text-area');
var countChar = document.getElementById('count-char');
countChar.textContent = 140;
btnInputText.disabled = true;
// if (userInputText.value.length === 0 || userInputText.value === ' ') {
//     btnInputText.disabled = true;
// }

function inputControls() {
    
    countChar.textContent = (140 - userInputText.value.length);
    if (userInputText.value.length === 0 || userInputText.value === ' ') {
        btnInputText.disabled = true;
    } else {
        btnInputText.disabled = false;
    }

};
function userPostText() {
    event.preventDefault();
    if (userInputText.value) {
        var postTextOutput =  document.getElementById('output-text');
        var userText = document.createTextNode(userInputText.value);
        var newUserPost = document.createElement('p');
        newUserPost.appendChild(userText);
        postTextOutput.appendChild(newUserPost);
        console.log(userText.length);
   } 
};

userInputText.addEventListener('keyup', inputControls);
btnInputText.addEventListener('click', userPostText);


