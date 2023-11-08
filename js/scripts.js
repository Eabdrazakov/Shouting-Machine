let fontSize = 16;

function setMadlids() {
    const textInput = document.getElementById("textInput").value;
    const span = document.querySelector("span#result");

    document.querySelector("span#result").innerText = textInput.toUpperCase();

    fontSize += 2;

    span.style.fontSize = fontSize + "px";
}

function getMadtoForm() {
    const form = document.querySelector("form");
    form.onsubmit = function (event) {
        event.preventDefault();
        setMadlids();
        document.querySelector("div#text").removeAttribute("class");
    }
}

window.onload = function () {
    getMadtoForm();
};