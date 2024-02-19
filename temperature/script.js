function convertTemperature() {
    // Get input values
    let celsiusValue = document.getElementById('celsius').value;
    let fahrenheitValue = document.getElementById('fahrenheit').value;

    // Check if input is not empty
    if (celsiusValue !== '' && fahrenheitValue === '') {
        // Convert Celsius to Fahrenheit
        let convertedFahrenheit = (parseFloat(celsiusValue) * 9/5) + 32;
        document.getElementById('fahrenheit').value = convertedFahrenheit.toFixed(2);
    } else if (fahrenheitValue !== '' && celsiusValue === '') {
        // Convert Fahrenheit to Celsius
        let convertedCelsius = (parseFloat(fahrenheitValue) - 32) * 5/9;
        document.getElementById('celsius').value = convertedCelsius.toFixed(2);
    } else {
        alert('Please enter a value in either Celsius or Fahrenheit, not both.');
    }
}
