//password validation
const pass1 = document.getElementById('user-password-1');
const pass2 = document.getElementById('user-password-2');

const checkPassword = function(){
    const message = document.getElementById('message');

    if(pass1.value === pass2.value){
        message.textContent = 'Passwords match.';
        message.style = "color: green";
    }else{
        message.textContent = 'Passwords do not match.';
        message.style = "color: red";
    }
}

pass2.addEventListener('keyup', () => {
    checkPassword();
});
