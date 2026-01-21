const population = 203000000;
const temperature = 30;
const windSpeed = 10;

document.getElementById("population").textContent =
    population.toLocaleString();

document.getElementById("temperature").textContent = temperature;
document.getElementById("wind").textContent = windSpeed;

function calculateWindChill(temp, speed) {
    if (temp <= 10 && speed > 4.8) {
        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(speed, 0.16) +
            0.3965 * temp * Math.pow(speed, 0.16)
        ).toFixed(1) + " °C";
    } else {
        return "N/A";
    }
}

document.getElementById("windchill").textContent =
    calculateWindChill(temperature, windSpeed);

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;
