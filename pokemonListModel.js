
const request = require("request");
const fetch = require("node-fetch");

var pokemonList = [];

function Pokemon(id, nombre, peso, altura, experience) {
    this.id = id;
    this.nombre = nombre;
    this.peso = peso;
    this.altura = altura;
    this.experience = experience;
}

module.exports.pokemons = async (nPokemons)=>{
    
    for (let index = 0; index < nPokemons; index++) {
        let pokemon =  await requestPokemon(index+1);
        pokemonList.push(new Pokemon(pokemon.game_indices[0].game_index, pokemon.name,
             pokemon.weight, pokemon.height, pokemon.base_experience));
    }   
    //console.log(pokemonList);
    
    return pokemonList;
}

 async function requestPokemon(id){
    let url = "https://pokeapi.co/api/v2/pokemon/" + id + "/";
    return fetch(url).then(res=> res.json());
}









