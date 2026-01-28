const yearSpan = document.querySelector("#year");
const modifiedSpan = document.querySelector("#modified");

yearSpan.textContent = new Date().getFullYear();
modifiedSpan.textContent = document.lastModified;
