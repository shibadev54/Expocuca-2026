const darkModeButton = document.getElementById("darkMode");

darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});