document.addEventListener("DOMContentLoaded", function () {
    // Add destination
    document.getElementById("destination-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const destinationInput = document.getElementById("destination");
        const destination = destinationInput.value;
        if (destination) {
            const li = document.createElement("li");
            li.textContent = destination;
            document.getElementById("selected-destinations").appendChild(li);
            destinationInput.value = "";
        }
    });

    // Add activity
    document.getElementById("activity-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const activityInput = document.getElementById("activity");
        const dateInput = document.getElementById("date");
        const activity = activityInput.value;
        const date = dateInput.value;
        if (activity && date) {
            const li = document.createElement("li");
            li.textContent = `${activity} on ${date}`;
            document.getElementById("itinerary-list").appendChild(li);
            activityInput.value = "";
            dateInput.value = "";
        }
    });

    // Add accommodation
    document.getElementById("accommodation-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const typeInput = document.getElementById("accommodation-type");
        const dateInput = document.getElementById("accommodation-date");
        const type = typeInput.value;
        const date = dateInput.value;
        if (type && date) {
            const li = document.createElement("li");
            li.textContent = `${type} on ${date}`;
            document.getElementById("accommodation-list").appendChild(li);
            typeInput.value = "";
            dateInput.value = "";
        }
    });

    // Add transportation
    document.getElementById("transportation-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const typeInput = document.getElementById("transportation-type");
        const dateInput = document.getElementById("transportation-date");
        const type = typeInput.value;
        const date = dateInput.value;
        if (type && date) {
            const li = document.createElement("li");
            li.textContent = `${type} on ${date}`;
            document.getElementById("transportation-list").appendChild(li);
            typeInput.value = "";
            dateInput.value = "";
        }
    });

    // Add expense
    document.getElementById("budget-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const expenseInput = document.getElementById("expense");
        const amountInput = document.getElementById("amount");
        const expense = expenseInput.value;
        const amount = parseFloat(amountInput.value);
        if (expense && !isNaN(amount)) {
            const li = document.createElement("li");
            li.textContent = `${expense}: $${amount.toFixed(2)}`;
            document.getElementById("expense-list").appendChild(li);
            expenseInput.value = "";
            amountInput.value = "";
            updateTotalAmount();
        }
    });

    // Update total amount
    function updateTotalAmount() {
        const amounts = Array.from(document.querySelectorAll("#expense-list li")).map(
            (li) => parseFloat(li.textContent.split(": $")[1])
        );
        const total = amounts.reduce((sum, amount) => sum + amount, 0);
        document.getElementById("total-amount").textContent = total.toFixed(2);
    }

    // Show consolidated trip details
    document.getElementById("submit-button").addEventListener("click", function () {
        const destinations = Array.from(document.querySelectorAll("#selected-destinations li")).map(li => li.textContent);
        const activities = Array.from(document.querySelectorAll("#itinerary-list li")).map(li => li.textContent);
        const accommodations = Array.from(document.querySelectorAll("#accommodation-list li")).map(li => li.textContent);
        const transportations = Array.from(document.querySelectorAll("#transportation-list li")).map(li => li.textContent);
        const expenses = Array.from(document.querySelectorAll("#expense-list li")).map(li => li.textContent);
        const totalAmount = document.getElementById("total-amount").textContent;

        const tripDetailsDiv = document.getElementById("trip-details");
        tripDetailsDiv.innerHTML = `
            <h3>Destinations:</h3>
            <ul>${destinations.map(dest => `<li>${dest}</li>`).join('')}</ul>
            <h3>Activities:</h3>
            <ul>${activities.map(act => `<li>${act}</li>`).join('')}</ul>
            <h3>Accommodations:</h3>
            <ul>${accommodations.map(acc => `<li>${acc}</li>`).join('')}</ul>
            <h3>Transportations:</h3>
            <ul>${transportations.map(trans => `<li>${trans}</li>`).join('')}</ul>
            <h3>Expenses:</h3>
            <ul>${expenses.map(exp => `<li>${exp}</li>`).join('')}</ul>
            <h3>Total Amount: $${totalAmount}</h3>
        `;
    });

    // Show and hide login form
    document.getElementById("login-button").addEventListener("click", function () {
        document.getElementById("login-form").style.display = "block";
    });

    document.getElementById("close-login").addEventListener("click", function () {
        document.getElementById("login-form").style.display = "none";
    });

    // Show and hide register form
    document.getElementById("register-button").addEventListener("click", function () {
        document.getElementById("register-form").style.display = "block";
    });

    document.getElementById("close-register").addEventListener("click", function () {
        document.getElementById("register-form").style.display = "none";
    });
});
