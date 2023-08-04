const contactForm = document.querySelector('form');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let message = document.getElementById('message');


contactForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    

    let formData = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        phone: phone.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email Sent');

            fname.value = '';
            lname.value = '';
            email.value = '';
            phone.value =  '';
            message.value = '';
        }else{
            alert('Something Went Wrong')
        }
    }

    xhr.send(JSON.stringify(formData));

})