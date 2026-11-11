
document.addEventListener("DOMContentLoaded", function () {

    // =================================
    // COPYRIGHT YEAR
    // =================================

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    // =================================
    // MOBILE NAVIGATION
    // =================================

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            const isOpen = navLinks.classList.toggle("active");

            menuToggle.setAttribute("aria-expanded", String(isOpen));

            menuToggle.textContent = isOpen ? "✕" : "☰";
        });


        // Close menu after selecting a navigation link

        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.textContent = "☰";
            });

        });

    }


    // =================================
    // FLOATING MEET ADIL AI CHAT
    // =================================

    const chatToggle = document.getElementById("chatToggle");
    const chatWindow = document.getElementById("chatWindow");
    const chatClose = document.getElementById("chatClose");

    if (chatToggle && chatWindow && chatClose) {

        function openChat() {

            chatWindow.classList.add("active");

            chatWindow.setAttribute("aria-hidden", "false");

            chatToggle.setAttribute("aria-expanded", "true");

        }


        function closeChat() {

            chatWindow.classList.remove("active");

            chatWindow.setAttribute("aria-hidden", "true");

            chatToggle.setAttribute("aria-expanded", "false");

        }


        // Toggle chat window

        chatToggle.addEventListener("click", function () {

            const isOpen = chatWindow.classList.contains("active");

            if (isOpen) {
                closeChat();
            } else {
                openChat();
            }

        });


        // Close chat using close button

        chatClose.addEventListener("click", closeChat);


        // Close chat when Escape key is pressed

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {
                closeChat();
            }

        });

    }

});
