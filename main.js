const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");
const response = document.getElementById("response");

yesButton.addEventListener("click", () => {
    response.textContent = "I Love You ❤️";
    response.style.color = "#28a745";
});

noButton.addEventListener("click", () => {
    noButton.disabled = true;
    noButton.textContent = "Not Allowed";
    response.textContent = "Try Again? 😉";
    response.style.color = "#dc3545";
});
