const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("confirm-password");
const Submit = document.getElementById("btn");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    validateInputs();
})

const validateInputs= () =>{
    const usernameValue = username.Value.trim();
    const emailValue = email.Value.trim();
    const passwordValue = password.Value.trim();
    const cPasswordValue = cPassword.Value.trim();


    if(usernameValue === ''){
        setError(username,'Username is required');
    }
    else{
        setSuccess(username);
    }
    if(passwordValue === ''){
        setError(password,'Password is required');
    }
    else if(passwordValue.length<8){
        setError(password,'password must be at least 8 character.')
    }
    else{
        setSuccess(password);
    }
    if(cPasswordValue === ''){
        setError(cPassword,'Please confirm Your Password');
    }
    else if(cPasswordValue !==passwordValue){
        setError(password,"password doesn't match.")
    }
    else{
        setSuccess(cPassword);
    }
}
const setError= (element,message)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;

    inputControl.classlist.add('error');
    inputControl.classlist.remove('success');
}

const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText ='';
    inputControl.classlist.add('success');
    inputControl.classlist.remove('error');
}