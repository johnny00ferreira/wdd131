document.addEventListener("DOMContentLoaded", () => {

    let volunteers = JSON.parse(localStorage.getItem("volunteers")) || [];

    const volunteerCount = document.getElementById("volunteer-count");
    const volunteerList = document.getElementById("volunteerList");

    function displayVolunteers() {
        if (!volunteerList) return;

        volunteerList.innerHTML = "";

        volunteers.forEach(volunteer => {
            const li = document.createElement("li");
            li.textContent = `${volunteer.name} from ${volunteer.city} - ${volunteer.role}`;
            volunteerList.appendChild(li);
        });
    }

    if (volunteerCount) {
        volunteerCount.textContent = `Total Volunteers Registered: ${volunteers.length}`;
    }

    displayVolunteers();

    const form = document.getElementById("volunteerForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const city = document.getElementById("city").value.trim();
            const role = document.getElementById("role").value;

            if (!name || !email || !city || !role) {
                return;
            }

            const volunteer = { name, email, city, role };

            volunteers.push(volunteer);
            localStorage.setItem("volunteers", JSON.stringify(volunteers));

            form.reset();
            displayVolunteers();

            if (volunteerCount) {
                volunteerCount.textContent =
                    `Total Volunteers Registered: ${volunteers.length}`;
            }
        });
    }

    const tipsContainer = document.getElementById("tipsContainer");

    if (tipsContainer) {
        const recyclingTips = [
            { material: "Plastic", instruction: "Separate plastic bottles and containers and place them in recycling bins." },
            { material: "Glass", instruction: "Rinse glass bottles and separate by color when possible." },
            { material: "Metal", instruction: "Recycle aluminum cans and remove any food residue." },
            { material: "Organic Waste", instruction: "Dispose of food scraps in compost or organic waste bins." }
        ];

        recyclingTips.forEach(tip => {
            const div = document.createElement("div");
            div.innerHTML = `
                <h3>${tip.material}</h3>
                <p>${tip.instruction}</p>
            `;
            tipsContainer.appendChild(div);
        });
    }

});

