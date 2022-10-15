var icon = document.getElementById("icon-error");
var email = document.getElementById("email");
var text = document.getElementById("text-error");
const RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
var btn = document.getElementById("submit");

const Onsubmit = (e) =>{
    e.preventDefault();
    let email_value = email.value;
    if(email_value == '' || email_value === undefined){
        icon.style.display = 'block'
        text.innerText = 'Please provide us your valid email';
        text.style.display = 'block';
    }
    if(!email_value.match(RegEmail)){
        icon.style.display = 'block'
        text.innerText = 'Please provide us your valid email';
        text.style.display = 'block';
    }
    else{
        icon.style.display = 'none'
        text.innerText = 'Thank you for subsribe';
        text.style.display = 'block';
    }

}


btn.addEventListener('click',Onsubmit);
