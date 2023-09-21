class Producto {
    constructor(public nombre: string, public precio: number) {}
  }
  
  class Compra {
    constructor(public productos: Producto[], public fecha: string) {}
  }
  
  // un arreglo de objetos con al menos 5 elementos 
  const compras: Compra[] = [
    new Compra([new Producto('Camiseta', 20), new Producto('Pantalones', 30)], '2023-09-21'),
    new Compra([new Producto('Zapatos', 50), new Producto('Gorra', 10)], '2023-09-22'),
    new Compra([new Producto('Chaqueta', 40), new Producto('Calcetines', 5)], '2023-09-23'),
    new Compra([new Producto('Sombrero', 15), new Producto('Bufanda', 12)], '2023-09-24'),
    new Compra([new Producto('Vestido', 35), new Producto('Bolso', 25)], '2023-09-25'),
  ];
  
  // mostrar las compras usando forEach
  console.log('Recorriendo y mostrando con forEach:');
  compras.forEach((compra, index) => {
    console.log(`Compra #${index + 1}: Fecha: ${compra.fecha}`);
    compra.productos.forEach((producto, productoIndex) => {
      console.log(`  Producto ${productoIndex + 1}: Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
    });
  });
  
  // mostrar las compras usando for...in
  console.log('\nRecorriendo y mostrando con for...in:');
  for (const index in compras) {
    if (compras.hasOwnProperty(index)) {
      const compra = compras[index];
      console.log(`Compra #${Number(index) + 1}: Fecha: ${compra.fecha}`);
      compra.productos.forEach((producto, productoIndex) => {
        console.log(`  Producto ${productoIndex + 1}: Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
      });
    }
  }
  
  // mostrar las compras usando for...of
  console.log('\nRecorriendo y mostrando con for...of:');
  let indice = 1;
  for (const compra of compras) {
    console.log(`Compra #${indice}: Fecha: ${compra.fecha}`);
    compra.productos.forEach((producto, productoIndex) => {
      console.log(`  Producto ${productoIndex + 1}: Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
    });
    indice++;
  }
  