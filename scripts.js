//Obtendo elementos
const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.getElementById("currency")
const footer = document.getElementsByTagName("footer")[0];

// Manipilando o input amount para receber apenas números
amount.addEventListener('input', ()=>{
  const hasCharacterRegex = /\D+/g
  amount.value = amount.value.replace(hasCharacterRegex, "")
})

//Capturando o evento de submit do formulário
form.onsubmit = (ev)=>{
  ev.preventDefault()

  console.log(currency.value)

  if(currency.value == "USD") {
    footer.classList.remove('hidden')

    const result = document.querySelector("#result")
    const description = document.getElementById("description")

    description.innerText = `US$ 1 = R$ 4,86`

    const moneyConverted = (amount.value*4.86)
    result.innerText = `${moneyConverted.toFixed(2)}`

  } 

  else if(currency.value == "EUR") {
    footer.classList.remove('hidden')
    const description = document.getElementById("description")
    description.textContent = `€$ 1 = R$ 6,07`

    const result = document.querySelector("#result")

    const moneyConverted = (amount.value*6.07)
    result.innerText = `${moneyConverted.toFixed(2)}`
  } 

  else if(currency.value == "GBP") {
    footer.classList.remove('hidden')
    const description = document.getElementById("description")
    description.innerText = `£$ 1 = R$ 7,34`

    const result = document.querySelector("#result")

    const moneyConverted = (amount.value*7.34)
    result.innerText = `${moneyConverted.toFixed(2)}`
  }

  
}