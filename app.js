const formInput = document.querySelector(".input-area")
const formMain = document.querySelector(".form-main")
const error = document.querySelectorAll(".error")

formMain.addEventListener('submit' , (e) => {
    e.preventDefault()
    for (const input of formMain) {
        if ( input.value === "") {
            input.classList.add("enter-input")
            displayError()
        }
        console.log(input.value)
    }

    if (formMain[0].value != "") {
        error[0].classList.remove("error-message")
        error[0].innerText = "Thank you!"
        formMain[0].classList.remove("enter-input")
        error[0].classList.add("correct")
    }

    

    console.log("submitted")
})

// error display function

function displayError() {
    for(let errors of error) {
        errors.classList.add("error-message")
        errors.innerText = "Please fill out the required details"
    }
}