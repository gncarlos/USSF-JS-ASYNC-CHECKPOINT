#!/usr/bin/env node

var fs = require('fs')
const fetch = require('node-fetch')

var input = 'input.txt'

function getPkmTypeFromFile(input) {
  fs.readFile(input, (err, data) => {
    if (err) throw err;
    const nameArray = data.toString().split('\r\n')
    nameArray.map(res => getPkmType(res))
  })

}

async function getPkmType(pkmName) {
  await fetch (`https://pokeapi.co/api/v2/pokemon/${pkmName}`)
    .then(res => res.json())
    .then(res => res.types[0].type.name)
    .then(res => console.log(`${pkmName}:`, res))
}

getPkmTypeFromFile(input)