
const generar = require("./pokemonListModel.js");
const express = require("express");
const app = express();

let pokemons;
let nPokemons = 60;
chargePokemons();

async function chargePokemons(){
    pokemons = await generar.pokemons(nPokemons);
    console.log(pokemons);
}

app.get("/", (req, res) => {
    res.render("template", { titulo: "Pokemones con pug", mensaje: " Pokemons | Pug", pokemons: pokemons });

});

app.set("view engine", "pug");

app.listen(3000, () => {
    console.log("Corriendo en puerto 3000");
});
