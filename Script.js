document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link, .navbar-nav .btn");
    const navbarCollapse = document.getElementById("schoolNavbar");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (navbarCollapse && navbarCollapse.classList.contains("show")) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });

    const nameInputs = document.querySelectorAll("#parentName, #childName");
    nameInputs.forEach(function (input) {
        input.addEventListener("input", function () {
            this.value = this.value.replace(/[^a-zA-Z\s.]/g, "");
        });
    });

    const admissionForm = document.getElementById("admissionForm");
    const phoneInput = document.getElementById("phone");

    if (admissionForm && phoneInput) {
        admissionForm.addEventListener("submit", function (event) {
            const phone = phoneInput.value.trim();

            if (!/^[0-9+\-\s]{10,15}$/.test(phone)) {
                event.preventDefault();
                alert("Please enter a valid 10-digit phone number.");
                phoneInput.focus();
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const admissionForm = document.getElementById("admissionForm");
    
    if (admissionForm) {
        admissionForm.addEventListener("submit", function (event) {
            alert("Thank you! Your admission enquiry has been submitted successfully. We will contact you soon.");
        });
    }
});