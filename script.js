const cartButtons = document.querySelectorAll(".add-cart");

const cartItemsContainer = document.getElementById("cart-items");

const totalPriceElement = document.getElementById("total-price");

let total = 0;

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        const name = button.dataset.name;

        const price = parseInt(button.dataset.price);

        // CREATE ITEM
        const cartItem = document.createElement("div");

        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <p>${name}</p>
            <span>₹${price}</span>
        `;

        // ADD ITEM TO CART
        cartItemsContainer.appendChild(cartItem);

        // UPDATE TOTAL
        total += price;

        totalPriceElement.innerText = `₹${total}`;

    });

});