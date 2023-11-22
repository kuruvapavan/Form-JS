function validateForm(event){
    ev.preventDefault();
}

const nameInput=document.getElementById('name');
const emailInput=document.getElementById('email');
const passwordInput=document.getElementById('password');

const nameValue=nameInput.value.trim();
const emailValue=emailInput.value.trim();
const passwordValue=passwordInput.value.trim();

clearErrors();

if(nameValue=== ''){
    displayError(nameInput,'name is required');
    
}

const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;;
if(!emailRegex.test(emailValue)){
    displayError(emailInput,'email is invalid');
    
}

function displayError(inputElement,errorMessage){
    const errorElement=document.createElement('div');
    errorElement.className='error';
    errorElement.textContent=errorMessage;
    inputElement.parentElement.appendChild(errorElement);
}

function clearErrors(){
    const errorElements = document.querySelectorAll('error');
    errorElements.forEach(element =>element.remove());
}