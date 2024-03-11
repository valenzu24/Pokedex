const buscarpokemon = () => {
    //Peticion
    let nombrePokemon = document.getElementById("pokemon").value
    let mensajeNoEncontrado = "Actualmente no tenemos datos del pokemon " + nombrePokemon
    fetch("https://pokeapi.co/api/v2/pokemon/" + nombrePokemon)
        //Promesa
        .then((response) => {
            if (!response.ok) {
                alert(mensajeNoEncontrado)
            } else {
                return response.json()
            }
        })
        .then((informacion) => {

            // Cambiar la imagen asociada al botón
            document.getElementById("inputGroup-sizing-default").getElementsByTagName("img")[0].src = informacion.sprites.front_default

        })
        //Si hay un error..
        .catch(() => console.log("La peticion no se ha podido realizar"))
}