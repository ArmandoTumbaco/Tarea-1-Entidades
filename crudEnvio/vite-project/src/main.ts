import './style.css';

(async () => {
  // Obtener datos de envíos
  const response = await fetch('http://localhost:3000/api/envios');
  const data = await response.json();

  let divTable = `<table>`;
  divTable += `<tr><th>Id</th><th>Dirección</th><th>Ciudad</th><th>Estado</th><th>Código Postal</th><th>Acciones</th></tr>`;
  data.forEach((envio: IEnvio) => {
    divTable += `<tr><td>${envio.id}</td><td>${envio.direccion}</td><td>${envio.ciudad}</td><td>${envio.estado}</td><td>${envio.codigoPostal}</td>
    <td><button class="btn btn-delete">Eliminar</button></td><td><button class="btn btn-update">Actualizar</button></td></tr>`;
  });
  divTable += `</table>`;

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = divTable;

  const divButton = `<button class="btn btn-primary" >Agregar</button>`;
  document.querySelector<HTMLDivElement>('#app')!.innerHTML += divButton;

  // ...

  // Agregar envío
  const btnSave = document.querySelector<HTMLButtonElement>('.btn-save');
  btnSave?.addEventListener('click', async (e) => {
    e.preventDefault();
    const direccion = document.querySelector<HTMLInputElement>('#direccion')!.value;
    const ciudad = document.querySelector<HTMLInputElement>('#ciudad')!.value;
    const estado = document.querySelector<HTMLInputElement>('#estado')!.value;
    const codigoPostal = document.querySelector<HTMLInputElement>('#codigoPostal')!.value;

    const response = await fetch('http://localhost:3000/api/envios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ direccion, ciudad, estado, codigoPostal, productoId: 1 })
    });

    const data = await response.json();
    console.log(data);
    // Recargar la página
    location.reload();
  });

  // ...

  // Eliminar envío
  document.querySelectorAll<HTMLButtonElement>('.btn-delete').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent;
      console.log(id);
      await fetch(`http://localhost:3000/api/envios/${id}`, {
        method: 'DELETE'
      });
      location.reload();
    });
  });

  // ...

  // Actualizar envío
  document.querySelectorAll<HTMLButtonElement>('.btn-update').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent;
      const response = await fetch(`http://localhost:3000/api/envios/${id}`);
      const data = await response.json();

      // ...

      const divForm = `<form>
        <div class="mb-3">
          <label for="direccion" class="form-label">Dirección</label>
          <input type="text" class="form-control" id="direccion" aria-describedby="direccion" value="${data.direccion}">
        </div>
        <div class="mb-3">
          <label for="ciudad" class="form-label">Ciudad</label>
          <input type="text" class="form-control" id="ciudad" value="${data.ciudad}">
        </div>
        <div class="mb-3">
          <label for="estado" class="form-label">Estado</label>
          <input type="text" class="form-control" id="estado" value="${data.estado}">
        </div>
        <div class="mb-3">
          <label for="codigoPostal" class="form-label">Código Postal</label>
          <input type="text" class="form-control" id="codigoPostal" value="${data.codigoPostal}">
        </div>
        <button type='submit' class="btn btn-save">Save</button>
        ${oncancel}
      </form>`;

      document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm;

      const btnSave = document.querySelector<HTMLButtonElement>('.btn-save');
      btnSave?.addEventListener('click', async (e) => {
        e.preventDefault();
        const direccion = document.querySelector<HTMLInputElement>('#direccion')!.value;
        const ciudad = document.querySelector<HTMLInputElement>('#ciudad')!.value;
        const estado = document.querySelector<HTMLInputElement>('#estado')!.value;
        const codigoPostal = document.querySelector<HTMLInputElement>('#codigoPostal')!.value;

        const response = await fetch(`http://localhost:3000/api/envios/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ direccion, ciudad, estado, codigoPostal, productoId: 1 })
        });

        const data = await response.json();
        console.log(data);
        alert(data);
        // Recargar la página
        location.reload();
      });
    });
  });

})();