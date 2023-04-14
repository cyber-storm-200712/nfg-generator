#! /usr/bin/env node 
'use strict'

const commandLineArgs = require('command-line-args');
const optionDefinitions = [
    { name: 'layout', alias: 'l', type: String},
    { name: 'traits', type: String, multiple: true, defaultOption: true, alias: 't' }
]


console.log("NFT generation is upcoming.");

console.log(process.cwd())

console.log(commandLineArgs(optionDefinitions))