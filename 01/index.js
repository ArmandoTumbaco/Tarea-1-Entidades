// Ejemplo de arreglo de productos
const productos = [
    { id: 1, nombre: 'Camiseta', precio: 20 },
    { id: 2, nombre: 'Sombrero', precio: 15 },
    { id: 3, nombre: 'Zapatos', precio: 50 },
    { id: 4, nombre: 'Vestido', precio: 35 },
    { id: 5, nombre: 'Chaqueta', precio: 40 },
  ];
  
  // Función para buscar un elemento por su ID usando un callback
  function buscarElementoPorId(elementos, id, callback) {
    return elementos.find(callback);
  }
  
  // Función de callback para buscar un producto por su ID
  function buscarProductoPorId(producto, id) {
    return producto.id === id;
  }
  
  // Usar la función para buscar un producto por su ID
  const idBuscado = 3;
  const productoEncontrado = buscarElementoPorId(productos, idBuscado, (producto) => buscarProductoPorId(producto, idBuscado));
  
  if (productoEncontrado) {
    console.log(`Producto encontrado (ID: ${idBuscado}):`);
    console.log(`Nombre: ${productoEncontrado.nombre}`);
    console.log(`Precio: $${productoEncontrado.precio}`);
  } else {
    console.log(`No se encontró ningún producto con el ID ${idBuscado}`);
  }
  