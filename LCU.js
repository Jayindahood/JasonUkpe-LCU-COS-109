

let contactForm = document.getElementById("contactForm")
contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    let fullname = document.getElementById("fullname").value
    console.log(fullname)
    let email = document.getElementById("email").value
    console.log(email)
    let message = document.getElementById("message").value
    console.log(message)
}
)
