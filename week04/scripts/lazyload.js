const lastModified = document.lastModified;
const footerText = document.querySelector("#lastModified");

footerText.textContent = `Last modified: ${lastModified}`;
