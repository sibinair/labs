const form = document.getElementById('form');

const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('pswd');
const phone = document.getElementById('phone');

const nameErr = document.getElementById('nameError');
const emailErr = document.getElementById('emailError')
const passErr = document.getElementById('passError');
const phoneErr = document.getElementById('phoneError');

form.addEventListener('submit', (e) => {
	let bool = false;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let nameMessages = [];
	let phoneMessages = [];
	if (name.value.length < 3) {
		nameMessages.push('name should have minimum 3 letters');
	}else{
		nameErr.innerText = '';}

	if (name.value.match(/^([^0-9]*)$/)) {
		nameErr.innerText = '';
	}else{
		nameMessages.push('name cannot have numbers')}

	if (nameMessages.length > 0) {
		nameErr.innerText = nameMessages.join(',')
		bool = true;
	}

    if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
	    emailErr.innerText = '';
	    
    }else{emailErr.innerText = 'email format not correct';
    bool = true;}

	if (password.value.length < 6) {
		passErr.innerText = 'password must be minimum 6 characters';
		bool = true;
	}else{passErr.innerText = '';}

	if (phone.value.length < 10) {
		phoneMessages.push('phone number must be minimum 10 numbers');
	}else{phoneErr.innerText = '';}

	if (phone.value.match(/[^0-9]/)) {
		phoneMessages.push('phone number can only have numbers');
	}else{
		phoneErr.innerText = ''}

	if (phoneMessages.length > 0) {
		phoneErr.innerText = phoneMessages.join(',')
		bool = true;
	}

	if (bool == true) {
		e.preventDefault();
		bool = false;
	}
		
		
	
	
	
});
