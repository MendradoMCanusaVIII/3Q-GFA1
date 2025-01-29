var firstname = prompt("First name: ");
var lastname = prompt("Last name: ");
var birthyear = parseInt(prompt("Birth year: "));

document.getElementById("div").innerText="Hello " +firstname+ " " +lastname+"! How does it feel to be " +(2025-birthyear)+ " years old?";