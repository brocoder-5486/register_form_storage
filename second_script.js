const form = document.getElementById('form');
const fullName = document.querySelector('input[name=fullName]')
const email = document.querySelector('input[name=email]')
const password = document.querySelector('input[name=password]')
const confirmPassword = document.querySelector('input[name=confirmPassword]')

document.getElementById('btn').addEventListener('submit',e=>{
    e.preventDefault();

    checkInputs();

});



function checkInputs(){
    //trim to remove the white spaces
    const fullNameValue=fullName.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const confirmPasswordValue=confirmPassword.value.trim();

    if(fullNameValue===''){
        setErrorFor(fullName,'FullName cannot be empty');
    }else{
        setSuccessFor(fullName);
    }

    if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

    if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}

    if(confirmPasswordValue===''){
        setErrorFor(confirmPassword,'cannot be empty')
    }else if(passwordValue!==confirmPasswordValue){
        setErrorFor(confirmPassword,'Passwords does not match')
    }else{
        setSuccessFor(confirmPassword)
    }

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//creating users

let users = [];

const addUser = (e) => {
    // e.preventDefault();
    let user = {
        id:Date.now(),
        fullName:document.querySelector('input[name=fullName]').value,
        email:document.querySelector('input[name=email]').value,
        password:document.querySelector('input[name=password]').value,
        policy:document.querySelector('input[name=policy]').value,
    }
    if(user.fullName && user.email && user.password && user.policy){
        users.push(user);
        localStorage.setItem('usersList',JSON.stringify(users))
        
    }else{
        alert('fields cannot be empty')
    }
    
    document.querySelector('form').reset();

    

}

// document.getElementById('btn').addEventListener('click',addUser);

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('btn').addEventListener('click',addUser);
    formControl.className = ''
});