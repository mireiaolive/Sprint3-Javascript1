// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

//DOM Manipulation, placed inside variables
const cart_list = document.getElementById("cart_list");
const total_price = document.getElementById("total_price");
const count_product = document.getElementById("count_product");
const cleanCart_btn = document.getElementById("cleanCart_btn");
const checkOut_btn = document.getElementById("checkOut_btn");

// Exercise 1
function buy(id) {
    /* // 1. Loop for to the array products to get the item to add to cart
    for (let i = 0; i < id; i++) {
        // 2. Add found product to the cartList array
        if (products[i].id == id) {
            cartList.push(products[i]);
            console.log(cartList);
        }
    } */
    addToCart(id);
}

// Exercise 2
function cleanCart() {
    cart_list.innerHTML = "";
    total_price.innerHTML = 0;
    var cartList = [];
    cart = [];
}

// Exercise 3
function calculateTotal() {
    total = 0;
    // Calculate total price of the cart using the "cartList" array
    for (let i = 0; i < cartList.length; i++) {
        total += cartList[i].price;
    }
    return total;
}

// Exercise 4
/* function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart,
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    // El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false.
    let cart = [];
    for (let i = 0; i < cartList.length; i++) {
        //if doesn't exist push it
        if (!cart.includes(cartList[i])) {
            cartList[i].quantity = 1;
            cartList[i].subtotal = cartList[i].quantity * cartList[i].price;
            cart.push(cartList[i]);
            //If exist update it
        } else {
            cartList[i].quantity += 1;
            cartList[i].subtotal = cartList.quantity * cartList[i].price;
        }
    }
    applyPromotionsCart();
} */

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (let i = 0; i < cart.length; i++) {
        //definition of subtotal
        cart[i].subtotal = cart[i].price * cart[i].quantity;
        if (cart[i].id == 1 && cart[i].quantity >= 3) {
            cart[i].subtotalWithDiscount = cart[i].subtotal - 10;
        } else if (cart[i].id == 1 && cart[i].quantity >= 10) {
            cart[i].subtotalWithDiscount =
                cart[i].subtotal - cart[i].subtotal * 0.6;
        } else {
            cart[i].subtotalWithDiscount = "";
        }
    }
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    cart_list.innerHTML = "";
    const cartTotal = calculateTotal();
    for (let i = 0; i < cart.length; i++) {
        cart_list.innerHTML += `<tr><th>${cart[i].name}</th>
    <td>$${cart[i].price}</td>
    <td>${cart[i].quantity}</td>
    <td>$${cart[i].subtotal}</td>
    <td><button class="btn btn-outline-dark" onclick="removeFromCart(${cart[i].id})"><i class="fa fa-trash"></i></button></td>
    </tr>
    `;
    }
    total_price.innerHTML = cartTotal;
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it
    // 1. Loop for to the array products to get the item to add to cart
    for (let i = 0; i < id; i++) {
        var product = products[i];
    }
    cartList.push(product);
    //console.log(product);
    // Check if the product is already in the cart
    const index = cartList.findIndex((item) => item === product);

    if (!cart.includes(product)) {
        // Product is not in the cart, add it as a new item
        cartList[index].quantity = 1;
        cart.push(cartList[index]);
        //console.log(cart);
        count_product.innerHTML++;
    } else {
        // Product is already in the cart, update its quantity
        cartList[index].quantity += 1;
        count_product.innerHTML++;
    }
    //Apply promo and print
    applyPromotionsCart();
    printCart();
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for (let i = 0; i < id; i++) {
        var product = products[i];
    }

    if (product.quantity > 1) {
        product.quantity = product.quantity - 1;
        count_product.innerHTML--;
    } else {
        // Find item with findItem method, if found, remove it from the cart
        const index = cart.findIndex((item) => item === product);
        //remove one element (second argument) from the cart array at the specified index(first argument)
        cart.splice(index, 1);
        count_product.innerHTML--;
    }
    //Apply promo and print
    applyPromotionsCart();
    printCart();
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}
