/** @jest-environment jsdom */

const { validarIdade } = require("./script")

test ("maior-idade", function(){
    var maior = validarIdade("18")
    expect(maior).toBe(true)
})

test ("menor-idade", function(){
    var menor = validarIdade("")
    expect(menor).toBe(false)
})