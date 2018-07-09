// VERSÃO 0.0.3
// Se você passar os 140 caracteres, desative o botão. ok
// Se você passar os 120 caracteres, mostre o contador com outra cor.
// Se você passar os 130 caracteres, mostre o contador com outra cor.
// Se você passar os 140 caracteres, mostre o contador em negativo.


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
    console.log(userInputText.value.length);
    if (userInputText.value.length === 0 || userInputText.value === ' ') {
        btnInputText.disabled = true;
    } else if (userInputText.value.length > 140) {
        countChar.classList = 'color-def';
        countChar.classList.add('color-140');
        btnInputText.disabled = true;
    } else if (userInputText.value.length >= 110 && userInputText.value.length < 120) {
        countChar.classList = 'color-def';
        countChar.classList.add('color-130');
    } else if (userInputText.value.length >= 120 && userInputText.value.length <= 140) {
        countChar.classList = 'color-def';
        countChar.classList.add('color-120');
        btnInputText.disabled = false;
    } else {
        countChar.classList = 'color-def';
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


