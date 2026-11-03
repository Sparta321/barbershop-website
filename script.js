
// GENTLEMEN'S CUT BARBER WEBSITE

// Replace this with the barber's real WhatsApp number.
// Use Kenya format: 2547XXXXXXXX
const whatsappNumber = "254795473423";

// Set minimum booking date to today
const dateInput = document.getElementById("bookingDate");

const today = new Date();
const localDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

dateInput.min = localDate;

// WhatsApp booking
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const service = document.getElementById("service").value;
    const date = document.getElementById("bookingDate").value;
    const time = document.getElementById("bookingTime").value;
    const notes = document.getElementById("notes").value.trim();

    if (!name || !phone || !service || !date || !time) {
        alert("Please complete all required fields.");
        return;
    }

    if (!/^2547\d{8}$/.test(whatsappNumber)) {
        alert("Please configure the barber's WhatsApp number in script.js.");
        return;
    }

    const message =
        "HELLO GENTLEMEN'S CUT!\n\n" +
        "I would like to book an appointment.\n\n" +
        "Name: " + name + "\n" +
        "Customer Phone: " + phone + "\n" +
        "Service: " + service + "\n" +
        "Date: " + date + "\n" +
        "Time: " + time + "\n" +
        "Additional Notes: " + (notes || "None") + "\n\n" +
        "Please confirm my booking. Thank you!";

    

const whatsappNumber = "254795473423";

const bookingForm = document.getElementById("bookingForm");
const whatsappLink = document.getElementById("whatsappLink");

const dateInput = document.getElementById("bookingDate");

const today = new Date();
const localDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

dateInput.min = localDate;

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const service = document.getElementById("service").value;
    const date = document.getElementById("bookingDate").value;
    const time = document.getElementById("bookingTime").value;
    const notes = document.getElementById("notes").value.trim();

    if (!name || !phone || !service || !date || !time) {
        alert("Please complete all required fields.");
        return;
    }

    const message =
        "HELLO GENTLEMEN'S CUT!\n\n" +
        "I would like to book an appointment.\n\n" +
        "Name: " + name + "\n" +
        "Customer Phone: " + phone + "\n" +
        "Service: " + service + "\n" +
        "Date: " + date + "\n" +
        "Time: " + time + "\n" +
        "Additional Notes: " + (notes || "None") + "\n\n" +
        "Please confirm my booking. Thank you!";

    const whatsappURL =
        "https://wa.me/" + whatsappNumber +
        "?text=" + encodeURIComponent(message);

    whatsappLink.href = whatsappURL;
    whatsappLink.style.display = "inline-block";

    document.getElementById("bookingStatus").textContent =
        "Your booking is ready! Tap the link below.";

    whatsappLink.textContent = "TAP HERE TO OPEN WHATSAPP";
});

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("customerName").value.trim();
        const phone = document.getElementById("customerPhone").value.trim();
        const service = document.getElementById("service").value;
        const date = document.getElementById("bookingDate").value;
        const time = document.getElementById("bookingTime").value;
        const notes = document.getElementById("notes").value.trim();

        const message =
            "Hello, I would like to request a barber appointment.%0A" +
            "Name: " + encodeURIComponent(name) + "%0A" +
            "Phone: " + encodeURIComponent(phone) + "%0A" +
            "Service: " + encodeURIComponent(service) + "%0A" +
            "Date: " + encodeURIComponent(date) + "%0A" +
            "Time: " + encodeURIComponent(time) + "%0A" +
            "Notes: " + encodeURIComponent(notes);

        const whatsappNumber = "254795473423";

        window.open(
            "https://wa.me/" + whatsappNumber + "?text=" + message,
            "_blank"
        );

        document.getElementById("bookingMessage").textContent =
            "Your booking request is ready to send through WhatsApp.";
    });
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const phone = document.getElementById("contactPhone").value.trim();
        const messageText = document.getElementById("contactMessage").value.trim();

        const message =
            "Hello, I have an enquiry.%0A" +
            "Name: " + encodeURIComponent(name) + "%0A" +
            "Phone: " + encodeURIComponent(phone) + "%0A" +
            "Message: " + encodeURIComponent(messageText);

        const whatsappNumber = "254795473423";

        window.open(
            "https://wa.me/" + whatsappNumber + "?text=" + message,
            "_blank"
        );

        document.getElementById("contactStatus").textContent =
            "Your message is ready to send through WhatsApp.";
    });
}

const priceServices = document.querySelectorAll(".price-service");

if (priceServices.length > 0) {

    priceServices.forEach(function(service) {

        service.addEventListener("change", function() {

            let total = 0;

            priceServices.forEach(function(item) {
                if (item.checked) {
                    total += Number(item.value);
                }
            });

            document.getElementById("totalPrice").textContent = total;

        });

    });

}


document.addEventListener("DOMContentLoaded", function() {

    const themeToggle = document.getElementById("themeToggle");

    if (!themeToggle) return;

    themeToggle.addEventListener("click", function() {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeToggle.textContent = "🌙 Dark Mode";
        } else {
            themeToggle.textContent = "☀️ Light Mode";
        }

    });

});


  