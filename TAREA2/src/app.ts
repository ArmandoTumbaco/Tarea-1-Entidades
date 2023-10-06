import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function agregarAlCarrito(usuarioId: number, productoId: number, cantidad: number) {
  const nuevoElemento = await prisma.carrito.create({
    data: {
      cantidad,
      usuario: { connect: { id: usuarioId } },
      producto: { connect: { id: productoId } },
    },
  });
  return nuevoElemento;
}

async function obtenerElementosDelCarrito(usuarioId: number) {
  const elementosDelCarrito = await prisma.carrito.findMany({
    where: { usuarioId },
    include: { producto: true },
  });
  return elementosDelCarrito;
}

async function actualizarElementoDelCarrito(carritoId: number, nuevaCantidad: number) {
  const elementoActualizado = await prisma.carrito.update({
    where: { id: carritoId },
    data: { cantidad: nuevaCantidad },
  });
  return elementoActualizado;
}

async function eliminarElementoDelCarrito(carritoId: number) {
  const elementoEliminado = await prisma.carrito.delete({
    where: { id: carritoId },
  });
  return elementoEliminado;
}

// Ejemplos de uso de las funciones

// Agregar un elemento al carrito
const nuevoElemento = await agregarAlCarrito(1, 2, 3);

// Obtener elementos del carrito de un usuario
const elementos = await obtenerElementosDelCarrito(1);

// Actualizar la cantidad de un elemento en el carrito
const elementoActualizado = await actualizarElementoDelCarrito(1, 5);

// Eliminar un elemento del carrito
const elementoEliminado = await eliminarElementoDelCarrito(1);
