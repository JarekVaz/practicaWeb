function agregarAlCarrito(productId) {
    const carritoElement = document.getElementById("carrito");
    const totalElement = document.getElementById("total");

    // Obtener el producto actual
    const producto = document.getElementById(productId);
    const nombreProducto = producto.querySelector('.product-text').innerText.trim();
    const cantidad = parseInt(producto.querySelector(`#quantity${productId.slice(-1)}`).value); // Usar el ID correcto
    const precioUnitario = parseFloat(producto.querySelector('.price').innerText.replace('$', '').replace(' MXN', ''));
    const precioTotal = cantidad * precioUnitario;

    // Crear un nuevo elemento en el carrito
    const nuevoElementoCarrito = document.createElement("li");
    nuevoElementoCarrito.textContent = `${nombreProducto} - Cantidad: ${cantidad} - Total: $${precioTotal.toFixed(2)}`;

    // Agregar el nuevo elemento al carrito
    carritoElement.appendChild(nuevoElementoCarrito);

    // Calcular el nuevo total
    let total = parseFloat(totalElement.textContent);
    total += precioTotal;

    // Actualizar el total en la página
    totalElement.textContent = total.toFixed(2);
}

function pagar() {
    alert("¡Gracias por tu compra! ");
    
    //limpiar carrito
    carritoElement.innerHTML = "";
    totalElement.textContent = "0.00";
}
