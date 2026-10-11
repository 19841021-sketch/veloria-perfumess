document.addEventListener("DOMContentLoaded", function () {


    /* ==============================
       MODO CLARO / OSCURO
    ============================== */

    const themeButton =
        document.getElementById("themeToggle");

    const savedTheme =
        localStorage.getItem("veloria-theme");


    if (savedTheme === "dark") {

        document.documentElement.setAttribute(
            "data-theme",
            "dark"
        );

        if (themeButton) {
            themeButton.textContent = "☀";
        }

    }


    if (themeButton) {

        themeButton.addEventListener("click", function () {

            const currentTheme =
                document.documentElement.getAttribute("data-theme");


            if (currentTheme === "dark") {

                document.documentElement.removeAttribute(
                    "data-theme"
                );

                localStorage.setItem(
                    "veloria-theme",
                    "light"
                );

                themeButton.textContent = "◐";

            } else {

                document.documentElement.setAttribute(
                    "data-theme",
                    "dark"
                );

                localStorage.setItem(
                    "veloria-theme",
                    "dark"
                );

                themeButton.textContent = "☀";

            }

        });

    }


    /* ==============================
       JAVASCRIPT DEMO
    ============================== */

    const jsButton =
        document.getElementById("jsDemoButton");

    const jsText =
        document.getElementById("jsDemoText");


    if (jsButton && jsText) {

        jsButton.addEventListener("click", function () {

            jsText.textContent = window.veloriaLanguage === "en"
                ? "JavaScript is working correctly in VELORIA!"
                : "¡JavaScript está funcionando correctamente en VELORIA!";

            jsText.classList.add("demo-active");

        });

    }


    /* ==============================
       FILTRO DEL CATÁLOGO
    ============================== */

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const products =
        document.querySelectorAll(".product-item");


    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            const filter =
                button.getAttribute("data-filter");


            products.forEach(function (product) {

                const category =
                    product.getAttribute("data-category");


                if (
                    filter === "todos" ||
                    filter === category
                ) {

                    product.style.display = "";

                } else {

                    product.style.display = "none";

                }

            });

        });

    });


    /* ==============================
       jQUERY
    ============================== */

    if (typeof jQuery !== "undefined") {

        $("#fadeButton").on("click", function () {

            $("#jqueryDemo").fadeIn(600);

        });


        $("#slideButton").on("click", function () {

            $("#jqueryDemo").slideToggle(600);

        });

    }


    /* ==============================
       CUESTIONARIO
    ============================== */

    const quizForm =
        document.getElementById("quizForm");


    if (quizForm) {

        quizForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const correctAnswers = {

                q1: "a",
                q2: "b",
                q3: "c",
                q4: "a",
                q5: "b",
                q6: "c",
                q7: "a",
                q8: "b"

            };


            let score = 0;


            Object.keys(correctAnswers).forEach(function (question) {

                const selected =
                    document.querySelector(
                        `input[name="${question}"]:checked`
                    );


                const feedback =
                    document.getElementById(
                        question + "-feedback"
                    );


                if (!selected) {

                    feedback.textContent = window.veloriaLanguage === "en"
                        ? "Not answered."
                        : "No respondida.";

                    feedback.className =
                        "quiz-feedback incorrect";

                    return;

                }


                if (
                    selected.value ===
                    correctAnswers[question]
                ) {

                    score++;

                    feedback.textContent = window.veloriaLanguage === "en"
                        ? "✓ Correct answer"
                        : "✓ Respuesta correcta";

                    feedback.className =
                        "quiz-feedback correct";

                } else {

                    feedback.textContent = window.veloriaLanguage === "en"
                        ? "✗ Incorrect answer"
                        : "✗ Respuesta incorrecta";

                    feedback.className =
                        "quiz-feedback incorrect";

                }

            });


            const result =
                document.getElementById("quizResult");


            const total = 8;

            const percentage =
                Math.round((score / total) * 100);


            let message = "";


            if (percentage >= 90) {

                message = window.veloriaLanguage === "en"
                    ? "Excellent work!"
                    : "¡Excelente trabajo!";

            } else if (percentage >= 70) {

                message = window.veloriaLanguage === "en"
                    ? "Very good! You can keep reviewing."
                    : "¡Muy bien! Puedes seguir repasando.";

            } else {

                message = window.veloriaLanguage === "en"
                    ? "We recommend reviewing the topics."
                    : "Te recomendamos repasar los temas.";

            }


            result.innerHTML =
                `<strong>${window.veloriaLanguage === "en" ? "Result" : "Resultado"}: ${score}/${total}</strong>
                <br>
                ${percentage}%
                <br>
                ${message}`;


            result.style.display = "block";


            result.scrollIntoView({
                behavior: "smooth"
            });

        });

    }


    /* ==============================
       FORMULARIO DE CONTACTO
    ============================== */

    const contactForm =
        document.getElementById("contactForm");


    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const formMessage =
                document.getElementById("formMessage");


            formMessage.textContent = window.veloriaLanguage === "en"
                ? "✓ Thank you for contacting VELORIA. Your message was recorded as a demonstration."
                : "✓ Gracias por contactar con VELORIA. Tu mensaje fue registrado como demostración.";


            formMessage.style.display =
                "block";


            contactForm.reset();

        });

    }

    
const botonMusica = document.getElementById("boton-musica");
const musica = document.getElementById("musica-veloria");

if (botonMusica && musica) {
  botonMusica.addEventListener("click", async () => {
    if (musica.paused) {
      try {
        await musica.play();
        botonMusica.textContent = "Ⅱ Pausar música";
      } catch (error) {
        botonMusica.textContent = "♫ Intenta reproducir";
      }
    } else {
      musica.pause();
      botonMusica.textContent = "♫ Reproducir música";
    }
  });
}


});