const formEl = document.querySelector(".login-form");
console.log(formEl);

function submitHandler(event)  {
    event.preventDefault();
    // console.log(event.currentTarget.elements);
    const {
    elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
    }

    const info = {
        email: email.value,
        password: password.value,
    };
    console.log(info);
    event.currentTarget.reset();
}
 
formEl.addEventListener("submit", submitHandler);