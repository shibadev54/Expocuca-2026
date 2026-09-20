
        const darkModeButton =
            document.getElementById("darkMode");

        darkModeButton.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            const darkModeAtivo =
                document.body.classList.contains("dark");

            if (darkModeAtivo) {

                darkModeButton.textContent =
                    "☀️";

            } else {

                darkModeButton.textContent =
                    "🌙";

            }

        });
