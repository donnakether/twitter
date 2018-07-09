// VERSÃO 0.0.4
// Ao pressionar enter (/n) aumente a área de texto de acordo com o tamanho do texto.

// VERSÃO 0.0.5 (EXTRA)
// Se o número de caracteres digitados (sem dar um "enter") exceder o tamanho da área 
// de texto por padrão, mais uma linha deverá ser adicionada para que a rolagem não apareça. 
// (Se aplicável)

// VERSÃO 0.0.6 (EXTRA)
// Adicione a hora em que o tweet foi publicado no formato de 24 horas hh:mm.
// Nota: Para formatar a data e a hora, você pode criar sua própria função ou usar 
// uma biblioteca como moment.js.


var btnInputText = document.getElementById('input-text-btn');
var userInputText = document.getElementById('input-text-area');
var countChar = document.getElementById('count-char');
countChar.textContent = 140;
btnInputText.disabled = true;

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

function textAreaSize() { 
    userInputText = event.currentTarget;
    userInputText.style.height = 'auto';
    userInputText.style.height = userInputText.scrollHeight + 'px';
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

userInputText.addEventListener('keydown', textAreaSize);
userInputText.addEventListener('keyup', inputControls);
btnInputText.addEventListener('click', userPostText);


