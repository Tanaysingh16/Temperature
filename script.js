function convertToCelsius() {
    const celsiusInput = document.getElementById("celsiusInput").value;
    
    if (celsiusInput === "") {
        alert("Please enter a valid temperature in Celsius.");
        return;
    }

    const celsius = parseFloat(celsiusInput);
    const fahrenheit = (celsius * 9/5) + 32;

    document.getElementById("result").innerHTML = `${celsius} Celsius is ${fahrenheit.toFixed(2)} Fahrenheit`;
}
