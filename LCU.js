// Simple form submission message
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    document.getElementById("contactForm").reset();
});