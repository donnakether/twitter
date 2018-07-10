// VERSÃO 0.0.6 Twitter Laboratória


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
        var postTextOutput = document.getElementById('output-text');
        var newUserPost = document.createElement('li');
        newUserPost.textContent = userInputText.value;
        var dateOfPost = document.createElement('span');
        var currentTime = new Date();
        dateOfPost.textContent = 'Hora: ' + currentTime.getHours() + '\:' + currentTime.getMinutes();
        newUserPost.appendChild(dateOfPost);
        postTextOutput.appendChild(newUserPost);
        console.log(userText.length);
    }
};

userInputText.addEventListener('keydown', textAreaSize);
userInputText.addEventListener('keyup', inputControls);
btnInputText.addEventListener('click', userPostText);


