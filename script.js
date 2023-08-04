let inputName = document.querySelector('#name');
let inputAge = document.querySelector('#age');
let imagemResult = document.querySelector('#îmage_resultado');


function validarNameDoInput() {
  const paragraph = document.querySelector('#value')
  const valueName = document.querySelector('#valueName');
  const valueIdade = document.querySelector('#valueIdade')
  const error = document.querySelector('.error')

  const valorDoName = inputName.value;
  const valorDaIdade = inputAge.value;


  valueName.innerHTML = `Nome Digitado: ${valorDoName}`
  valueIdade.innerHTML = `Idade Digitada: ${valorDaIdade}` 
  error.innerHTML = validarIdade(valorDaIdade)

  if (validarIdade(valorDaIdade)) {
    error.classList.add('valido')
    error.classList.remove('invalido')
    error.innerHTML = 'VOCÊ É MAIOR DE IDADE!'
    imagemResult.src= './images/naruto-happy.jpg'
  } else {
    error.classList.add('invalido')
    error.classList.remove('valido')
    error.innerHTML = 'VOCÊ É MENOR DE IDADE!'
    imagemResult.src= './images/naruto-sad.jpg'
  }
}

// TESTAR ESSA FUNÇÃO
// ESSA FUNÇÃO POSSUI DOIS ERROS HIHIHIHI
// Função deve retornar TRUE caso o Idade seja maior ou igual a 18
// Função deve retornar FALSE caso o Idade seja menor que 18
function validarIdade(idade) {


  if(idade >= 18 ) {
    return true
  } else {
    return false
  }
}

module.exports = {
  validarIdade
}