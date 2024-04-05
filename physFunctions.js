function getEnergy() {
    physInput = document.getElementById("physInput").value;
    if (document.getElementById("physVariable").value === "frequency") {
        document.getElementById("energyResult").innerHTML = "Result: " + physInput * 6.626 + " * 10^-34 J"; }
    if (document.getElementById("physVariable").value === "wavelengthNM") {
        document.getElementById("energyResult").innerHTML = "Result: " + (6.626 * 3)/(physInput) + " * 10^-17 J"; }
}