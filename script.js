let input_email = document.querySelector('.input_email')
let input_name = document.querySelector('.input_name')
let input_surname = document.querySelector('.input_surname')
let input_password = document.querySelector('.input_password')
let a = document.querySelector(".qwer")
let inp_btn = document.querySelector('.inp_btn')

input_email.value = localStorage.getItem('email')
input_name.value = localStorage.getItem('text')
input_surname.value = localStorage.getItem('name')
input_password.value = localStorage.getItem('password')

input_email.onkeyup = () => {
    localStorage.setItem('email', input_email.value)
}
input_name.onkeyup = () => {
    localStorage.setItem('text', input_name.value)
}
input_surname.onkeyup = () => {
    localStorage.setItem('name', input_surname.value)
}
input_password.onkeyup = () => {
    localStorage.setItem('password', input_password.value)
}

//
let cont = document.querySelector('.cont')
//







let _email = localStorage.getItem('email')
let _name = localStorage.getItem('name')
let _surname = localStorage.getItem('surname')
let _password = localStorage.getItem('password')

if (_email, _name, _surname, _password) {
    // console.log("good");
    window.location = './index__.html'
} else {
    window.location = './index_.html'
    // console.log("false");
}



inp_btn.onclick = () => {
    if (_email, _name, _surname, _password) {
        alert("good");
        // window.location = './index__.html'
    } else {
        // window.location = './index_.html'
        alert("false");
    }
}


// console.log(cont);

cont.onsubmit = (event) => {
    event.preventDefault()

    let inp_one = event.target.querySelector('input_email')
    let inp_two = event.target.querySelector('input_name')
    let inp_three = event.target.querySelector('input_surname')
    let inp_four = event.target.querySelector('input_password')

    if (!_email, !_name, !_surname, !_password) {
        localStorage.setItem('email', inp_one.value)
        localStorage.setItem('text', inp_two.value)
        localStorage.setItem('name', inp_three.value)
        localStorage.setItem('password', inp_four.value)
    }


    console.log(inp_one, inp_two, inp_three, inp_four);

}


a.onclick = () => {
    localStorage.clear()
    location.reload();
    return false;
}