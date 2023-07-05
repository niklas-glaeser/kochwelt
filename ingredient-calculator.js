function calculateIngredients() {
    // Get the input field and ingredient elements
    const inputField = document.getElementById('inputField');
    const ingredientElements = document.querySelectorAll('[data-ingredient]');

    // Parse the input value to a floating-point number (decimal number)
    let portions = parseFloat(inputField.value);

    // Check if the input is not a valid number or is less than or equal to 0
    if (isNaN(portions) || portions <= 0) {
      // Set default portions to 4 if input is invalid or empty
      portions = 4;
      // Update the input field value to the default value
      inputField.value = portions;
    }

    // Calculate and update the amounts for each ingredient based on the number of portions
    ingredientElements.forEach((element) => {
      // Get the initial amount from the data attribute and parse it to a floating-point number
      const initialAmount = parseFloat(element.getAttribute('data-ingredient'));

      // Calculate the new amount for the ingredient based on the number of portions
      let calculatedAmount = (initialAmount / 4) * portions;

      // Check if the calculated amount is a whole number (no decimal places)
      if (calculatedAmount % 1 === 0) {
        // If it's a whole number, format the amount without decimal places
        calculatedAmount = calculatedAmount.toFixed(0);
      } else {
        // If it's a decimal number, format the amount with two decimal places and remove trailing zeros
        calculatedAmount = calculatedAmount.toFixed(2).replace(/\.?0+$/, '');
      }

      // Update the content of the ingredient element with the new calculated amount
      element.textContent = calculatedAmount;
    });
  }