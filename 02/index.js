function BuscarPorId(idPokemon, callback) {
    // Comprueba si idPokemon está definida antes de usarla
    if (typeof idPokemon === 'undefined') {
      return callback("El ID del Pokémon no está definido");
    }
  
    // Realiza la solicitud a la API con el valor de idPokemon
    fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se ha encontrado el Pokémon");
        }
        return response.json();
      })
      .then((data) => {
        // Accede y muestra solo el nombre del Pokémon
        const nombrePokemon = data.name;
        callback(null, nombrePokemon);
      })
      .catch((error) => {
        callback("Ha ocurrido un error al buscar el Pokémon", null);
      });
  }
  
  // Llama a la función BuscarPorId con un ID de Pokémon específico
  BuscarPorId(1, (error, nombre) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Nombre del Pokémon:", nombre);
    }
  });