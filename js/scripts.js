function setMadlids() {
    const textInput = document.getElementById("textInput").value;

    document.querySelector("span#result").innerText = textInput.toUpperCase();
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