/**
 * PizzasOnly Application v1.0
 * Date: 25/03/25
 * Author: James Nicholson
 * Description: James' Pizza Price Bundle Calculator is a web-based tool designed to help sales
 * quickly and accurately determine the total cost of pizzas during a promotional period. 
 * It applies the bundle prices and calculates the lowest possible cost for total pizza orders.
 */

let numberOfPizzas; 
let totalPrice = 0;

function checkQuantity() {
    // defining promotional prices
    const onePizza = 6.45;
    const twoPizza = 12.00;
    const threePizza = 14.00;

    // parseInt to convert input from string to an int
    numberOfPizzas = parseInt(document.getElementById("quantity").value);
    console.log("Number of pizzas:", numberOfPizzas);

    // calculator logic to obtain best price for bundle & mutiple bundles with remainder
    if (numberOfPizzas === 1) {
        totalPrice = onePizza;
    } else if (numberOfPizzas === 2) {
        totalPrice = twoPizza;
    } else if (numberOfPizzas === 3) {
        totalPrice = threePizza;
    } else {
        let leftoverPizzas = numberOfPizzas % 3;
        let groupsOfThree = Math.floor(numberOfPizzas / 3);

        if (leftoverPizzas === 1) {
            totalPrice = (groupsOfThree * threePizza) + onePizza;
        } else if (leftoverPizzas === 2) {
            totalPrice = (groupsOfThree * threePizza) + twoPizza;
        } else if (leftoverPizzas === 0) {
            totalPrice = groupsOfThree * threePizza;
        }
    }
    // Using console for personal testing and getElementByID to display onto webpage
    console.log("Total price for ", numberOfPizzas, " pizzas = $", totalPrice);
    document.getElementById("message").innerHTML = "Total cost for " + numberOfPizzas + " pizzas is: $" + totalPrice.toFixed(2);

    // Show the message after calculation
    document.getElementById("message").style.display = "block"; // Reveal the message

    return false // keeps total pizza & price total on webpage without refreshing
}